const typing = require('../functions/typingTime.js');

module.exports = {
	name: 'tequiero',
	description: '<3',
	execute(message, args) {
		typing.typingTime(message,2000);
        message.react('❤️');
		message.channel.sendMessage('https://cdn.discordapp.com/attachments/676993677704298519/677245769371353108/20191218_235913.jpg');
	},
};