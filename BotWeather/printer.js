// Write the message in console.log and return the string.
function printMessage(city, temperature, environement){
	console.log("In " + city + " ,the temperature is " + (temperature-273.15).toFixed(2) + "°C and the weather is "+ environement);
	return("In  " + city + " ,the temperature is " + (temperature-273.15).toFixed(2) + "°C and the weather is "+ environement);
}

//Write error
function printError(error){
	console.error(error.message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;