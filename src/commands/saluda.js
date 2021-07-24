const typing = require('../functions/typingTime.js');

module.exports = {
	name: 'saluda',
	description: 'Saluda al remitente',
	execute(message, args) {
		typing.typingTime(message,1200);
		message.channel.sendMessage('¡Hola! ' + message.author);
	},
};