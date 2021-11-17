// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong!');
  } else if (commandName === 'server') {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
    );
  } else if (commandName === 'user') {
    await interaction.reply('User info.');
  } else if (commandName === 'm') {
    await interaction.reply(
      'Hi is anyone around to help me for 30 minutes?' + '@here'
    );
  } else if (commandName === 'l') {
    await interaction.reply(
      'I am here in the lounge if anyone needs help. @here'
    );
  } else if (commandName === 'p') {
    await interaction.reply(
      'Available priorities:\n1. Critical\n2. High \n3. Medium\n4. Low'
    );

    // let filter = (msg) => !msg.author.bot;
    // let options = {
    //   max: 2,
    //   time: 15000,
    // };
    // let collector = interaction.channel.createMessageCollector(filter, options);

    // // The 'collect' event will fire whenever the collector receives input
    // collector.on('collect', (m) => {
    //   console.log(`Collected ${m.content}`);
    // });(
    interaction(
      'Hi! received your message and is available to talk now. Click on the Lounge voice channel on the left to speak now.'
    );
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
