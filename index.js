// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

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
    // Create a message collector
    // const filter = (m) => {
    //   return m.content.includes('discord');
    // };
    // const collector = interaction.channel.createMessageCollector({
    //   filter,
    //   max: 1,
    //   time: 5000,
    // });
    // collector.on('collect', (m) => console.log(`Collected ${m.content}`));
    // collector.on('end', (collected) =>
    //   console.log(`Collected ${collected.size} items`)
    // );
    // await interaction.reply(
    //   'Available priorities:\n1. Critical\n2. High \n3. Medium\n4. Low'
    // );
  } else if (commandName === 'r') {
    await interaction.reply(
      `Hi! <@${interaction.user.id}> received your message and is available to talk now. Click on the Lounge voice channel on the left to speak now.`
    );

    // interaction.user.voice.setChannel(process.env.LOUNGE_VC_ID);
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
