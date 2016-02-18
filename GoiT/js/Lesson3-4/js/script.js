var obj = {
	name: 'Vitaliy',
	myMethod: function() {
		var div1 = document.createElement('div');
		div1.innerHTML = 'Тест по программированию';
		div1.style.margin = 'auto';
		div1.style.width = '60%';
		document.body.appendChild(div1);
		
		var ol = document.createElement('ol');
		ol.innerHTML = 'Опросник';
		document.body.appendChild(ol);
		
		//Первый список.

		var li1 = document.createElement('li');
		li1.innerHTML = 'Вопрос N1';
		ol.appendChild(li1);

		var form1 = document.createElement('form');
		li1.appendChild(form1);

		//input1
		var input1 = document.createElement('input');
		input1.type = 'checkbox';
		input1.name = 'name1';
		form1.appendChild(input1)

		var inputText = document.createTextNode('Вариант ответа N1');
   		form1.appendChild(inputText);

		var br1 = document.createElement('br');
		form1.appendChild(br1);

		//input2
		var input2 = document.createElement('input');
		input2.type = 'checkbox';
		input2.name = 'name1';
		form1.appendChild(input2)

		var inputText = document.createTextNode('Вариант ответа N2');
   		form1.appendChild(inputText);

		var br2 = document.createElement('br');
		form1.appendChild(br2);

		//input3
		var input3 = document.createElement('input');
		input3.type = 'checkbox';
		input3.name = 'name1';
		form1.appendChild(input3)

		var inputText = document.createTextNode('Вариант ответа N3');
   		form1.appendChild(inputText);

		var br3 = document.createElement('br');
		form1.appendChild(br3);

		//Клонируем второй список 
		var li2 = li1.cloneNode(true);
		var myText = document.createTextNode('Вопрос N2');
   		li2.replaceChild(myText,li2.childNodes[0]);
		
		ol.appendChild(li2);

		//Клонируем третий список 
		var li3 = li1.cloneNode(true);
		var myText = document.createTextNode('Вопрос N3');
   		li3.replaceChild(myText,li3.childNodes[0]);
		ol.appendChild(li3);

	}
}

obj.myMethod();
