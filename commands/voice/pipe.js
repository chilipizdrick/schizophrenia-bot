import { SlashCommandBuilder } from 'discord.js';
import playAudioFromFile from '../../utils/playAudioFromFile.js';

const data = new SlashCommandBuilder()
	.setName('pipe')
	.setDescription('Plays pipe sound.');

const execute = async (interaction) => {
	await interaction.deferReply();
	try {
		await playAudioFromFile(interaction, 'assets/audio/pipe.mp3');
		await interaction.deleteReply();
	} catch (error) {
		interaction.editReply('Caught error while executing the commnad. Try again.');
		console.log(error);
	}
};

export { data, execute };