var isValid = false ;
 
function toggleBoolean (booleanVar) {
	if (typeof booleanVar === "string") {
		return !booleanVar;
	}else{
		console.log('warning! not a boolean');
	}
}
var newboolean = toggleBoolean('isValid') ;
console.log(newboolean) ;