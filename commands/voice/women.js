import { SlashCommandBuilder } from 'discord.js';
import playAudioFromFile from '../../utils/playAudioFromFile.js';

const data = new SlashCommandBuilder()
.setName('women')
.setDescription('Plays women.');

const execute = async (interaction) => {
    await interaction.deferReply();
    playAudioFromFile(interaction, 'assets/audio/women.mp3');
    await interaction.deleteReply();
}

export { data, execute };