var arr = [];
var name; 
var flag = false;

for (var i = 0 ; i < 4; i++) {
	arr.push( prompt( 'Enter Name') );
	console.log( arr[i]);
};

name = prompt('Просьба ввести имя пользователя ')


for (var i = 0 ; i < 4; i++) {
	if ( name == arr[i]) {
		flag = true;
	} 
}

if ( flag == true ) {
	alert(name + ' , вы успешно вошли')
	} else {
	alert ('Error, no such name')
	}




