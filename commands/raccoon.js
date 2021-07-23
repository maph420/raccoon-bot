const typing = require('../functions/typingTime.js');

module.exports = {
	name: 'raccoon',
	description: 'Devuelve mapache aleatorio (20 imagenes)',
	execute(message, args) {
		const imgs = 20;
		message.react('🦝');
		typing.typingTime(message,2000);
		message.channel.send({files:["./raccs_folder/racc_im"+(Math.floor(Math.random()*imgs)+".jpg")]});
	},
};