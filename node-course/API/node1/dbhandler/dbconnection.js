var mysql = require('mysql');
var config = require('config.json')('./config.json');

function Connection(){
	this.pool = null;
	this .init = function(){
	this.pool = mysql.createPool(config[config.Environment]);
    console.log('database connection established');
	};
	
	this.acquire = function(callback){
		this.pool.getConnection(function(err,connection)
			{
				callback(err,connection);
			});
	};
}
module.exports = new Connection();
