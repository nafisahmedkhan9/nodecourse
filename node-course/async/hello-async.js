console.log("Async chalenge!");
function printInTwoSeconds(message){
	setTimeout(function(){
		console.log(message);
	},1000);
}
printInTwoSeconds("Hello Async Program");