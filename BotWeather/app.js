var weather =require('./weather');

//Main fonction and add option to get information for many city
function Weather(cities,callback){
	try{
		cities.forEach(function(city){
			weather.get(city,function(stringToSend){
				callback(stringToSend)
			});
		})
	}catch(error){
		console.log(cities);
	}
}

module.exports.Weather = Weather;