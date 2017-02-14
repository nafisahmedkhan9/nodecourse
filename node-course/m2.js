
var matric1 = [[1,2,3],[4,5,6],[7,8,9]];
var matric2 = [[1,2,3],[4,5,6],[7,8,9]];

if (matric1) {}
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0; i < this.length; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
//Object.defineProperty(Array.prototype, "equals", {enumerable: false});
console.log(matric1.equals(matric2));