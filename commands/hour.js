const typing = require('../functions/typingTime.js');

var getHourMessage = (message) => {
	var currHour = new Date().getHours();
	var currMin= new Date().getMinutes();
	var timeStatus = ((currHour>12 && currHour<24) ? "pm" : "am");
	return ("Son las "+currHour+":"+currMin+"  //  "+(currHour-12)+":"+currMin+" "+timeStatus+" ");
};

module.exports = {
	name: 'hora',
	description: 'devuelve la hora actual [GMT-3]',
	execute(message, args) {
		typing.typingTime(message,1000)
		message.channel.send(getHourMessage(message));
	},
};