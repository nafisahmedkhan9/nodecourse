var weather = require('./weather.js');
var location = require('./location')

var argv = require('yargs')
	.option('location',{
		alias:"l",
		demand:false,
		describe:'location to fetch weather for',
		type:'string'
		})
		.help('help')
		.argv;
		//console.log(argv)

if(typeof argv.location === 'string' && argv.location.length > 0){
		/*console.log('location: '+argv.location+" "+'length : '+argv.location.length)*/
		console.log('location was provided');
		/*weather(argv.location,function(currentWeather)
		{
			console.log(currentWeather);
		});*/
		weather(argv.location).then(function(currentWeather){
			console.log(currentWeather);
		}).catch(function(error){
			console.log(error);
		})
}else{
		console.log('location was not provided');
		/*location(function(location){
		if(location){
			weather(location.city,function(currentWeather)
			{
				console.log(currentWeather);
			});
		}
		else{
			console.log('Unable to guess the location');
		}
		});*/
		location().then(function(loc){
			return weather(loc.city);
		}).then(function(currentWeather){
			console.log(currentWeather);
		}).catch(function(error){
			console.log(error);
		})

}
