var getHourMessage = (message) => {
	var currHour = new Date().getHours();
	var currMin= new Date().getMinutes();
	var timeStatus = ((currHour>13 && currHour<24) ? "pm" : "am");
	return (`Son las ${currHour}:${currMin}  //  ${((currHour>13)?(currHour-12):(currHour))}:${currMin} ${timeStatus}`); /*currHour-12*/
};

module.exports = {
	name: 'hora',
	description: 'devuelve la hora actual [GMT-3]',
	execute(message, args) {
		message.channel.sendTyping();
		message.channel.send(getHourMessage(message));
	},
};