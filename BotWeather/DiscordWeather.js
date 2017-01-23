const Discord = require('discord.js');
var app =require('./app');
const bot = new Discord.Client();


function notCommande(prefix,message){
	if(!message.content.startsWith(prefix)){
		console.log("Le test not Commande : ok ");
		return;
	}
}

function helloBot(prefix,message){
	notCommande(prefix,message);
	if(message.content == prefix + "Weather"){
    	message.channel.sendMessage("Hello I'm the WeatherBot :");
    }
}

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

bot.on('message', (message) => {
	let prefix = "!";

	helloBot(prefix,message);
	getWeather(prefix,message);
});


bot.login('MjcwOTE0ODc0MjMyNjY4MTYw.C2eIdg.iKNrUP0WR-EdfgoMcoz1N6yGpXc');