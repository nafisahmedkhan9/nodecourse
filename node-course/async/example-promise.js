var request = require('request');
function getweather(location){
	return new Promise(function (resolve,reject){
			var encodedLocation = encodeURIComponent(location);
			var url = "http://api.openweathermap.org/data/2.5/weather?q="+encodedLocation+"&units=Metric&appid=7627abce952a93ab07350c93afef2d0a";
			if(!location){
				reject("No location provided")
			}
			request({
			url:url,
			json: true
			}, function(error,response,body){
			if (error) {
				reject("Unable to fetch data");
			} else{
				resolve("It\'s "+body.main.temp+" in "+ body.name +" !");
			}
		});
	})
}
getweather().then(function(currentweather){
	console.log(currentweather);
},function(error){
	console.log(error);
})	