const Discord = require('discord.js');
const bot = new Discord.Client();
const nodegeocoder = require('node-geocoder');
const mysql = require('mysql');
var connection = mysql.createConnection({
  	host     : 'bschumactiadmin.mysql.db',
  	user     : 'bschumactiadmin',
  	password : '',
  	database : 'bschumactiadmin'
});
var options = {
  provider: 'google',
 
  // Optional depending on the providers 
  httpAdapter: 'https', // Default 
  apiKey: 'AIzaSyC9ALOfu6t51WB7QdBlSc2R3JTXxGMPi4g', // for Mapquest, OpenCage, Google Premier 
  formatter: null         // 'gpx', 'string', ... 
};
var geocoder = nodegeocoder(options);


/*geocoder.geocode('22 rue anatole france, 69800 st-priest', function(err, res){
    console.log(res);
    });*/

bot.on('message', (message) => {
    // Set the prefix
    let prefix = "!";
	// Exit and stop if it's not there
    if(!message.content.startsWith(prefix)) return;   
    if(message.content == prefix + "ping"){
    	message.channel.sendMessage("pong");
    }
    if(message.content.startsWith(prefix + "imhere")){
    	var args = message.content.split(" ");
    	var address = "";
    	for(var i=1;i < args.length;i++){
    		address += args[i]+" ";
    	}
    	geocoder.geocode(address, function(err, res){
    		message.channel.sendMessage(message.author+" is at : Lat: "+res[0].latitude+ "Long: "+res[0].longitude);
    		connection.connect();
    		connection.query("INSERT INTO User VALUES("+message.author+","+res[0].latitude+","+res[0].longitude);
    	});

    	
    }  
});

bot.login('MjcwOTE2MTQ5ODc1NzAzODA5.C2ZLug.ZuENw4pYcc_NmS2-woTusRqZL_E');


