var argv = require('yargs')
	.command("hi","this is hi command",function(yargs){
		yargs.options({
			name:{
				demand:true,
				alias:"n",
				description:"this command is used for name",
				type:"string"
			},
			lastname:{
				demand:false,
				alias:"l",
				description:"not compulsory",
				type:"string"
			}
		}).help('help');
	})
	.help('help')
	.argv ;
console.log(argv);
if(argv.name != undefined && argv.lastname != undefined){
	console.log("Hello "+argv.name +" "+ argv.lastname);
}
else if(argv.name != undefined){
	console.log("Hello "+argv.name);
}
else{
	console.log("Hello World");
}
