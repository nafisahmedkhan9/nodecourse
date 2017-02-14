var request = require('request') ;
var url = "http://api.openweathermap.org/data/2.5/weather?q=mumbai&units=Metric&appid=7627abce952a93ab07350c93afef2d0a";

request({
	url:url,
	json: true
}, function(error,response,body){
	if (error) {
		console.log("Unable to fetch data");
	} else{
		console.log("It\'s "+body.main.temp+" in"+ body.name +" !");
	}
});
console.log("first execute this!");
