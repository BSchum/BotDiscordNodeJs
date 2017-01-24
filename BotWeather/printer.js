// Write the message in console.log and return the string.
function printMessage(city, temperature, environement){
	console.log("A " + city + " ,la temperature est de " + (temperature-273.15).toFixed(2) + "°C et le temps est "+ environement);
	return("A " + city + " ,la temperature est de " + (temperature-273.15).toFixed(2) + "°C et le temps est "+ environement);
}

//Write error
function printError(error){
	console.error(error.message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;