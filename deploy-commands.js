const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();

const commands = [
  new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong!'),
  new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info!'),
  new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info!'),
  new SlashCommandBuilder()
    .setName('m')
    .setDescription('Is there someone available who can help me')
    .addNumberOption((option) =>
      option.setName('minutes').setDescription('Amount of time we need.')
    ),
  new SlashCommandBuilder().setName('l').setDescription('Help others'),
  new SlashCommandBuilder().setName('p').setDescription('Priority list'),
  new SlashCommandBuilder().setName('r').setDescription('respond to someone'),
].map((command) => command.toJSON());

const rest = new REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN);

rest

  .put(
    Routes.applicationGuildCommands(
      process.env.DISCORD_CLIENT_ID,
      process.env.DISCORD_GUILD_ID
    ),
    { body: commands }
  )
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
