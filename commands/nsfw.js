const typing = require('../functions/typingTime.js');

module.exports = {
	name: 'nsfw',
	description: 'no',
	execute(message, args) {
		typing.typingTime(message,700);
		message.channel.sendMessage('troliado putooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
	},
};