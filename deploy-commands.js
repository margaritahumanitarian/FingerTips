const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const CommandsBuilder = require('./commandBuilder')

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest

  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    { body: CommandsBuilder.getAllCommands() }
  )
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
