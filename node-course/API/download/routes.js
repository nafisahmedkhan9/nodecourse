//var controllers = require('./controllers.js');
module.exports = function(app){
//For get base url	
	app.get('/download', function(req, res){
	var file = 'C:\Users\intern11\Desktop\node-course\node-basic\API\download\New folder\MCS-11.pdf';
	res.download(file); // Set disposition and send it.
	});
// for post base url
	app.get('/',function(req,res){
		res.send('in get base url routes');
	});
	app.get('/org',function(req,res){
		res.send('in get base url routes /org');
	});
}