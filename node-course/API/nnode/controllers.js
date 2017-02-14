var connection = require('./dbconnection.js');

function controllers1()
{
	this.get = function(cb){		
		connection.acquire(function(err,con)
			{
				con.query("select * from table1", function(err,result){
					con.release();
					console.log('making query : '+JSON.stringify(result));
					cb(err,result);
				});
			});
		//make db class call and get data over here
	};
};
module.exports = new controllers1();