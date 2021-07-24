const typing = require('../functions/typingTime.js');

var factorial = (factOf) => {
	var fact=1; 
	for(var i=factOf;i>0;i--) fact *= i;
	return fact;
};

module.exports = {
	name: 'factorial',
	description: 'devuelve factorial del numero pedido',
	execute(message, args) {
        var expectedArgs=1;
        if(!args.length){
            typing.typingTime(message,700);
            message.channel.send("No pasaste argumentos para "+factorial.name+", "+message.author+" chinchulin.");
        }
        else if (args.length > expectedArgs){
            typing.typingTime(message,700);
            message.channel.send("Demasiados argumentos para "+factorial.name+", "+message.author+"! (Se esperaban: "+expectedArgs+") ")
        }  
        else if (args > 170){
            typing.typingTime(message,700);
            message.channel.send("Oops, ese numero es muy grande para que discord lo represente! (Tiende a infinito)")
        }
        else{
            typing.typingTime(message,700);
            message.channel.send("Factorial de "+args+" --> "+factorial(args)+"");
        }
	},
};
