module.exports = {
	name: 'saluda',
	description: 'Saluda al remitente',
	execute(message, args) {
		message.channel.sendTyping();
		message.reply(`¡Hola! ${message.author}`);
	},
};