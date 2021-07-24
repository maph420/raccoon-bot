const disc = require('discord.js');
exports.typingTime = function(message,time){ 
        message.channel.startTyping();
        setTimeout(()=>{
                message.channel.stopTyping();
        }, time)
}
	
        
	
