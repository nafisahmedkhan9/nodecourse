//function compareArrays(matric1,matric2){

var booleanMetric = true;
var matric1 = [[1,2,3],[4,5,6],[7,8,9]];
var matric2 = [[1,2,3],[4,5,6],[7,8,9]];
for (var i = 0; i < matric1.length ; i++) {

	for (var j = 0; j < matric1[i].length ; j++) {
		
		if (matric1[i][j] != matric2[i][j]){
			booleanMetric = false ;
			break;
		}		
	}
}
if(booleanMetric == true)
	console.log("Matrices are equal");
else
	console.log("Matrices are not equal");
	
