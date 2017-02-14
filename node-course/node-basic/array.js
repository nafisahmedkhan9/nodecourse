var grades= [100,50,25,97] ;
var totalGrade = 0 ;
grades.push(89) ;

grades.forEach(function (grade) {
	// body...
	totalGrade = totalGrade+grade;
	console.log('current total is '+totalGrade);
});

var average = totalGrade/ grades.length ;
console.log('Average is '+average)