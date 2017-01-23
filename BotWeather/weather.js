var http = require('http');
var printer =require('./printer');

var stringToSend ="";

function get(city, callback){
	var request = http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=15b4a682aec747499c3f40f4c401e615", function(reponse){

		var body = "";

		reponse.on('data', function (chunk){
			body += chunk;
		});

		reponse.on('end', function (){
			if(reponse.statusCode === 200){
				try{
					var data_weather = JSON.parse(body);
					stringToSend = (printer.printMessage(city, data_weather.main.temp, data_weather.main.pressure));
					callback(stringToSend);
				}catch(error){
					printer.printError(error);
				}
			}else{
				printer.printError({message :"Les informations ne sont pas valides."});
			}
		});
	});
	request.on('error', function(error){
		printer.printError(error);
	});
}

exports.stringToSend = stringToSend;
module.exports.get = get;