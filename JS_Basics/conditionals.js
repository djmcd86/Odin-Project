let value = prompt('What is the official name of JavaScript?', '');

if (value == "ECMAScript") {
	alert('Right!');
} else {
	alert ("You don't know? ECMAScript!")
}


let integer = prompt('Type a number', 0);

if (integer > 0) {
	alert(1);
} else if (integer < 0) {
	alert(-1);
} else {
	alert(0);
}

let login = prompt("Who's there", '');

if (login === 'Admin') {
	let pass = prompt('Type your password', '');

	if (pass == 'TheMaster'){
		alert('Welcome!');
	} else if (pass == '' || pass == null {
		alert('cancelled');
	} else {
		alert('Wrong Password');
	}

} else if (login == '' || null) {
	alert('cancelled');
} else {
	alert("I don't know you");
}

result = (a + b < 4)? 'Below':'Over';

let message = (login == 'Employee') ? 'Hello':
		(login == 'Director') ? 'Greetings':
		(login == '') ? 'No login':
		''; 

//switch statement
const month = new Date().getMonth();

switch (month) {
	case 11:
	case 0:
	case 1:
		console.log('Summer');
		break;

	case 2:
	case 3:
	case 4:
		console.log('Autumn');
		break;

	case 5:
	case 6:
	case 7:
		console.log('Winter');
		break;

	case 8:
	case 9:
	case 10:
		console.log('Spring');
		break;
	default:
		console.log("Error");
}