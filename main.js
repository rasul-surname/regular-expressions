function tableSearch() {
    let text = document.getElementById('search-text');
	let table = document.getElementById('table');

	let value = text.value.trim();

	let regPhrase = new RegExp(value, 'i');
	let flag = false;

	for(let i = 0; i < table.rows.length; i++) {
		flag = false;
		console.log(table.rows[i].cells.length);
		for(let j = table.rows[i].cells.length - 1; j >= 0; j--) {
			flag = regPhrase.test(table.rows[i].cells[j].innerHTML);
			if(flag) break;
		}
		if (flag) {
            table.rows[i].style.display = "";
        } else {
            table.rows[i].style.display = "none";
        }
	}
}

function changes() {
	let camelCase = document.getElementById('camelCase');
	let regular = /([A-Z])/g;
	let phrase = camelCase.value;
	alert(phrase.replace(regular, " $1"));	
	camelCase.value = '';					
}

function del() {
	let text = document.getElementById('text');
	let regular = /\s{2,}/g;
	let phrase = text.value;
	alert(phrase.replace(regular, ' '));	
	text.value = '';					
}

function check() {
	let login = document.getElementById('login');
	let regular = /^[a-zA-z]+\W?[a-z]+@[a-zA-z]+\.[a-z]{2,3}$/;
	let phrase = login.value;
	if(regular.test(phrase)) {
		alert('Email корректный');	
	} else {
		alert('Email некорректный');	
	}
	login.value = '';					
}

function checkPhone() {
	let tel = document.getElementById('tel');
	let regular = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
	let phrase = tel.value;
	if(regular.test(phrase)) {
		alert('Номер принадлежит Российскому региону');	
	} else {
		alert('Номер не принадлежит Российскому региону');	
	}
	tel.value = '';					
}

function checkEmpty() {
	let text = document.getElementById('text-empty');
	let regular = /^$/;
	let result = regular.test(text.value);
	if(result) {
		alert('Пожалуйста введите данные');
	} else {
		alert('Данные успешно отправились');
	}
	
}

function checkWord() {
	let word = document.getElementById('word');
	let text = document.getElementById('big-text');

	let regular = new RegExp(word.value, 'gi');
	
	if(regular.test(text.innerHTML)) {
		alert('Такое слово есть');
	} else {
		alert('Такого слова нет');
	}
	word.value = '';
}
