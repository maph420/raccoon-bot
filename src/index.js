const fs = require('fs');
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const ytdl = require("ytdl-core");
const {prefix, token} = require('./config.json');

const queue = new Map();
bot.commands = new Discord.Collection();

/*commandFiles stores all .js files in current dir*/
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	/*bot funs setting at each module*/
	bot.commands.set(command.name, command);
}

bot.on('messageCreate', message => {
	/*bot has no due with that message*/
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/); /*regex*/
	const command = args.shift().toLowerCase();

	const serverQueue = queue.get(message.guild.id);

if (!bot.commands.has(command)) return;

try {
	if (command == "play" || command == "skip" || command == "stop") {
		console.log(command);
		bot.commands.get(command).execute(message, serverQueue);
	} 
	else
		bot.commands.get(command).execute(message, args);
} catch (error) {
	console.error(error);
	message.reply('error');
}
});


/*only will run -once- at the beginning*/
bot.once('ready', () => {
	console.log(`-reminder de que los mapaches son bae \n-logged as ${bot.user.tag}-`)
});

bot.once('reconnecting', () => {
	console.log("reconectando...");
  });
  
bot.once('disconnect', () => {
	console.log("desconectado! )/");
  });

bot.on('messageCreate', () => {
        bot.user.setActivity('%help');
    });

bot.login(token);