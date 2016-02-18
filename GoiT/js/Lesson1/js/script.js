var chislo = prompt('Enter chislo', "");
var stepen = prompt('Enter stepen', "");

console.log('Result is ', pow(chislo, stepen) );


function pow (a, b) {
	 var result = 1;
	//Проверка ввода данных 
	// if ((typeof(a) != Number) OR (typeof(b) != Number)) {	
	// 	console.log ('a or b is not Number');
	// } 

	if ( b >= 2 ) {  
	for (var i = 0; i < b; i++) {
		
		result *= a;
	}
	}
	return result;
}

