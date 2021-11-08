// Require the necessary discord.js classes
const { Client, Intents } = require("discord.js");
require("dotenv").config();

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready!");
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

  if (commandName === "ping") {
    await interaction.reply("Pong!");
  }
 else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`,
    );
  }
 else if (commandName === "user") {
    await interaction.reply("User info.");
  }
  else if (commandName === "m") {
    await interaction.reply("Hi is anyone around to help me for 30 minutes?" + "@here");
  }
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
