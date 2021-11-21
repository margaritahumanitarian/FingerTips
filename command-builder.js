const { SlashCommandBuilder } = require('@discordjs/builders');

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
    new SlashCommandBuilder().setName('mc').setDescription('Critical Priority'),
    new SlashCommandBuilder().setName('mh').setDescription('High Priority'),
    new SlashCommandBuilder().setName('mm').setDescription('Medium Priority'),
    new SlashCommandBuilder().setName('ml').setDescription('Low Priority'),
    new SlashCommandBuilder().setName('help').setDescription('List of all the commands'),
    new SlashCommandBuilder().setName('h').setDescription('List of all the commands'),
].map((command) => command.toJSON());

module.exports = {
    getAllCommands: () => commands
};