const fs = require('fs');
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

/*commandFiles stores all .js files in current dir*/
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	/*bot funs setting at each module*/
	bot.commands.set(command.name, command);
}

bot.on('message', message => {
	/*bot has no due with that message*/
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/); /*regex*/
	const command = args.shift().toLowerCase();

if (!bot.commands.has(command)) return;

try {
	bot.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('sth went wrong...');
}
});


/*only will run -once- at the beginning*/
bot.once('ready', () => {
console.log("reminder de que los mapaches son bae")
});

bot.on('message', () => {
        bot.user.setActivity('%help');
    });

bot.login(token);