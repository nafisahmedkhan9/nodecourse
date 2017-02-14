var request = require('request') ;
module.exports = function (location) {
		//move url into here 
		return new Promise (function(resolve, reject){
				var encodedLocation = encodeURIComponent(location);
				var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodedLocation+"&units=Metric&appid=7627abce952a93ab07350c93afef2d0a";
				if(!location){
					return reject("No location provided")
				}
				request({
				url:url,
				json: true
				}, function(error,response,body){
				if (error) {
					resolve("Unable to fetch data");
				} else{
					resolve("It\'s "+body.main.temp+" in "+ body.name +" !");
				}
			});
		});
				
} 