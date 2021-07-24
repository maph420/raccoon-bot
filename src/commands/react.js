module.exports = {
	name: 'react',
	description: 'Raccoon bot reacciona a tu pedido con un emoji de mapache',
	execute(message, args) {
		message.react('🦝');
	},
};