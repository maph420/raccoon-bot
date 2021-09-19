module.exports = {
	name: 'tequiero',
	description: '<3',
	execute(message, args) {
		message.channel.sendTyping();
        message.react('❤️');
		message.channel.send('https://cdn.discordapp.com/attachments/676993677704298519/677245769371353108/20191218_235913.jpg');
	},
};