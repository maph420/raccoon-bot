var factorial = (factOf) => {
	var fact=1; 
	for(var i=factOf;--i>0;) fact *= (i+1);
	return fact;
};

module.exports = {
	name: 'factorial',
	description: 'devuelve factorial del numero pedido',
	execute(message, args) {
        var expectedArgs=1;
        if(!args.length){
            message.channel.sendTyping();
            message.reply(`No pasaste argumentos para ${factorial.name}, ${message.author} chinchulin.`); /*message.author now returns uid instead of mentioning user*/
        }
        else if (args.length > expectedArgs){
            message.channel.sendTyping();
            message.reply(`Demasiados argumentos para ${factorial.name}, ${message.author}! (Se esperaban: ${expectedArgs}) `)
        }  
        else if (args > 170){
            message.channel.sendTyping();
            message.reply(`Oops, ese numero es demasiado grande, proba con un valor mas pequeño, ${message.author} :p`)
        }
        else{
            message.channel.sendTyping();
            message.reply(`Factorial de ${args}  ➡️  ${factorial(args)}`);
        }
	},
};
