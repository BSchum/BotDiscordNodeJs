const Discord = require('discord.js');
var app =require('./app');
const bot = new Discord.Client();


// Test if starts with "!".
function notCommande(prefix,message){
	if(!message.content.startsWith(prefix)){
		console.log("It's not a commande for bot ");
		return;
	}
}

// Bot send a message if user write "!Weather"
function helloBot(prefix,message){
	notCommande(prefix,message);
	if(message.content == prefix + "Weather"){
    	message.channel.sendMessage("Hello I'm the WeatherBot :");
    }
}

// Bot send a message with Weather data if user write "!getWeather"
function getWeather(prefix,message){
	notCommande(prefix,message);
	if(message.content.startsWith(prefix + "getWeather")){
		var args = message.content.split(" ");
		var WeatherCities = [];

		for(var i=1;i < args.length;i++){
    		WeatherCities[i-1] = args[i];
    	}
    	app.Weather(WeatherCities,function(resultat){
    		message.channel.sendMessage(resultat);
    	})
	}
}

// Bot is listening if commande is use.
bot.on('message', (message) => {
	let prefix = "!";

	helloBot(prefix,message);
	getWeather(prefix,message);
});


bot.login('MjcwOTE0ODc0MjMyNjY4MTYw.C2eIdg.iKNrUP0WR-EdfgoMcoz1N6yGpXc');