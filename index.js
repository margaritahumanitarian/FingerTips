// Require the necessary discord.js classes
const { Client, Intents, MessageEmbed } = require('discord.js');
const CommandsBuilder = require('./command-builder');
require('dotenv').config();

// Create a new client instance
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!');
  client.user.setActivity("/help", {
    type: "LISTENING"
  });
});

client.on('messageCreate', (message) => {
  // creating a regular expression pattern to match word audrey case-insensitive
  const pattern = /(audrey)/i;
  // checking if message not from bot
  if (!message.author.bot) {
    // 2 check
    // 1 - if audrey has mentioned using @audreyfeldroy
    // 2 - audrey used in message
    if (
      message.mentions.users.find(
        (user) => user.username === 'audreyfeldroy'
      ) ||
      message.content.match(pattern)
    ) {
      // <@501511414654042112> is refering to @audreyfeldroy
      message.reply(
        `${message.author}, Thank you for your message. <@501511414654042112> is unable to respond via typing. If you see her in the General voice channel feel free to join and communicate, or if there is no one in the voice channel then please wait until they come online.`
      );
    }
  }
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
      `Hi, is anyone around to help @audreyfeldroy for ${minutes} minutes?` + '@here'
    );
  } else if (commandName === 'l') {
    await interaction.reply(
      'Hey everyone, @audreyfeldroy is available in the General voice channel if anyone needs help. @here'
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
  } else if (commandName[0] === 'm') {
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
  } else if (commandName === 'help' || commandName === 'h') {
    const helpEmbed = new MessageEmbed()
      .setColor("#3c7168")
      .setAuthor("FingerTips Plugins Commands", client.user.displayAvatarURL())
      .addFields(
        CommandsBuilder.getAllCommands().map(cmd => {
          return {
            name: `\`/${cmd.name}\``,
            value: cmd.description,
            inline: true
          }
        })
      )
    await interaction.reply({ embeds: [helpEmbed] });
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
