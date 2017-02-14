var pet = {} ;
pet.name = 'Bittu' ;
pet.type = 'Dog' ;
pet.fordelete = "deletedvalue" ;

delete pet.fordelete;
console.log(pet)

function printPet (pet) {
	return console.log('Your '+pet.type+' is named '+pet.name);
}
printPet(pet);