// var chislo = +prompt('Enter chislo');
// var stepen = +prompt('Enter stepen');

// var arr = [];
// var name; 
// var flag = false;

// for (var i = 0 ; i < 4; i++) {
// 	arr.push( prompt( 'Enter Name') );
// 	console.log( arr[i]);
// };

// name = prompt('Просьба ввести имя пользователя ')


// for (var i = 0 ; i < 4; i++) {
// 	if ( name == arr[i]) {
// 		flag = true;
// 	} 
// }

// if ( flag == true ) {
// 	alert(name + ' , вы успешно вошли')
// 	} else {
// 	alert ('Error, no such name')
// 	}

// var obj = {
// 	o: '1',
// 	1: true,
// 	2: 'false',
// }

// var student = {
// 	age: 18,
// 	name: 'Vasya',
// 	'my second name': 'Pupkin2'
// }

// for (var key in student) {
// 	console.log(key, ' ', student[key]);
// 	console.log('__________');
// 	}

// var keysList = Object.keys(student);
// console.log(keysList);

// abc = 5;

// var str = '12px';
// var num = parseInt(str);

// console.log( num );

// if ( isNaN(num) ) {
// 	console.log('not a number')
// } else {
// 	console.log('is a number')
// }

// var newStr = num.toString() + 'hello';
// console.log( newStr );

// var newNumber = 13.5;
// var roundResult= Math.round( newNumber );
// console.log( roundResult );

// var str2 = '1,2,test,admin';
// var arr = str2.split(',');
// console.log( arr ); 

// function sayHi() {
// 	alert('Hi');
// }
// function calculate (a,b) {
// 	console.log(arguments);
// 	return;
// }
// calculate(2,3,5);


//        LESSON 6 DOM MODIFICATION


// var element = document.querySelectorAll('.menu a');
// var link = element[2];
// console.log( element ) ;
// link.innerHTML = "<strong>some</strong> new text";
// console.log( link.getAttribute('href') )
// link.setAttribute('href', 'http://yandex.ru');

// link.classList.add('js-second-class');
// console.log( link.classList );
// link.style.backgroundColor = 'green';

// var newDiv = document.createElement('div');
// newDiv.classList.add('box');
// newDiv.innerHTML = 'dynamically created element';

// var wrapper = document.querySelector('.wrapper ');
// console.log( 'wrapper.classList ', wrapper.classList );

// var class1 = document.querySelectorAll('.class0 > .class1');
// console.log( 'class1', class1 );

// wrapper.appendChild(newDiv);
// wrapper.insertBefore(newDiv, wrapper.children[0]);



//             LESSON 5 EVENTS

// var link = document.querySelector('a');
// var class1 = document.querySelector('.class1')

// function handler1(event) {
// 	console.log('event target', event.target);
// 	event.preventDefault();
// }

// function handlerKeyDown(event) {
// 	console.log('Keyboard event', event, ' and code ', event.keyCode);
// }

// function handler2(event) {
// 	console.log('event target', event.target, ' X=', event.clientX, ' Y=' , event.clientY); 
// }

// window.addEventListener('keydown', handlerKeyDown);
// link.addEventListener('click', handler1);
// class1.addEventListener('click', handler2);

//              LESSON 6 setTimeout/Interval конструкторы?, operator new

// function someFunction() {
// 	console.log('it works!')
// } 
// setTimeout(someFunction, 2000);
// var timer = setInterval(someFunction, 1000);
// clearTimeout(timer);

// var o = new Object();
// var arr = new Array(1,2,4);
// console.log(arr);

// var dog = new Animal('111','black'); //Конструктором становится любая функция, вызванная через new.
// dog.noise();

// function Animal(name, color) {
// 	var self = this;
// 	self.name = name;
// 	self.color = color;
// 	self.noise = function() {
// 		alert('My name is '+ self.name); 
// 	}
// }

// var context = {
// 	firstName: 'Vasya',
// 	lastName: 'Pupkin',
// }

// function calculateMoney(a, b){
// 	console.log('name is ' + this.firstName + ' ' + this.lastName + ' I have dollars ' + (a + b) );  
// }
// calculateMoney.apply(context, [3, 5]);

// function printArguments() {
// 	var arg = [].slice.call(arguments);
// 	arg.push('test');
// 	console.log(arg);
// }
// printArguments(1,2,3);

//              LESSON 7 FUNCTION EXPRESSION/DECLARATION Замыкания модульность

// var double = function(a){   //this is expression
// 	console.log(a*2);
// }
// double(4);

// function tripple(a) {      //this is declaration
// 	console.log(a*3);
// } 
// tripple(5);

function createCounter(){
	var counter = 1;           //it is all about the lexical enviroments + замыкание 

	return function() {
		return counter++; 
	}
}

var newCounter1 = createCounter();
newCounter1();
newCounter1();
newCounter1();
var result1 = newCounter1();
console.log('result1 = ' + result1);

var newCounter2 = createCounter();
newCounter2();
var result2 = newCounter2();
console.log('result2 = ' + result2);

(function(a) {                 //immediatelly invoked dfunction expression
	var abc;
	console.log('test ' + a);
}) (100) 

var shop = (function(){
	var appleAmount = 100;

	function getAppleAmount() {
		return appleAmount;
	}

	return {
		getAppleAmount: getAppleAmount,
	} 
})()

console.log('apples anount' + shop.getAppleAmount());