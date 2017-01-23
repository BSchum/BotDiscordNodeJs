function printMessage(city, temperature, pressure){
	return("A " + city + " ,la temperature est de " + (temperature-273.15).toFixed(2) + "°C et la pression est de "+ pressure + " pascales");
}

function printError(error){
	console.error(error.message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;