module.exports = {
	name: 'raccoon',
	description: 'Devuelve mapache aleatorio (20 imagenes)',
	execute(message, args) {
		const imgs = 20;
		message.react('🦝');
		message.channel.sendTyping();
		message.channel.send({files:["./raccs_folder/racc_im"+(Math.floor(Math.random()*imgs)+".jpg")]});
	},
};