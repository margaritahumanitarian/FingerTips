// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');
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
    const minutes = interaction.options.getNumber('minutes') || 30;
    await interaction.reply(
      `Hi is anyone around to help me for ${minutes} minutes?` + '@here'
    );
  } else if (commandName === 'l') {
    await interaction.reply(
      'I am here in the lounge if anyone needs help. @here'
    );
  } else if (commandName === 'p') {
    interaction.channel.send(
      'Available priorities:\n1. Critical\n2. High \n3. Medium\n4. Low'
    );
    //if the interaction happening is with bot then the data wouldnt be collected
    const filter = (interaction) => {
      return !interaction.member.user.bot;
    };
    //Create a new collector in the channel where /p is used
    const collector = interaction.channel.createMessageCollector({
      filter,
      max: 5,
      time: 5000,
    });
    collector.on('collect', (m) => {
      if (m.content === '1') {
        return interaction.channel.send(`Priority is **Critical** @here`);
      }
      if (m.content === '2') {
        return interaction.channel.send(`Priority is **high** @here`);
      }
      if (m.content === '3') {
        return interaction.channel.send(`Priority is **Medium** @here`);
      }
      if (m.content === '4') {
        return interaction.channel.send(`Priority is **Low** @here`);
      } else {
        return interaction.channel.send(`invalid option selected :C`);
      }
    });
    collector.on('end', (collected) =>
      console.log(`Collected ${collected.size} items`)
    );

    await interaction.reply(`This list of Priorities is as follows:`);
  } else if (commandName === 'r') {
    await interaction.reply(
      `Hi! <@${interaction.user.id}> received your message and is available to talk now. Click on the Lounge voice channel on the left to speak now.`
    );

    // interaction.user.voice.setChannel(process.env.LOUNGE_VC_ID);
  }

  // Command: "/mc, /mh, /mm, /ml"
  else if (commandName[0] === 'm') {
    const newEmbed = new MessageEmbed()
    switch (commandName[1]) {
      case "c":
        newEmbed.setColor('#ff3030').setTitle(`Priority is **Critical**`)
        break
      case "h":
        newEmbed.setColor('#ff7b1c').setTitle(`Priority is **High**`)
        break
      case "m":
        newEmbed.setColor('#1c7eff').setTitle(`Priority is **Medium**`)
        break
      case "l":
        newEmbed.setColor('#55c278').setTitle(`Priority is **Low**`)
        break
    }
    await interaction.channel.send(`Hi is anyone around to help me for 30min minutes? @here`)
    await interaction.reply({ embeds: [newEmbed] });
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
