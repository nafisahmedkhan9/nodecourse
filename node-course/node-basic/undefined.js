function greetUser (name) {
	if(typeof name === 'undefined'){
		console.log('hello world') ;
	}else{
		console.log('hello ' +name)
	}
}
greetUser();
greetUser('nafis');