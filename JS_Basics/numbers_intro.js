//if one is s other will be too:
alert('1' + 2); // "12"
alert(2 + '1'); // '21'
alert(2 + 2 + '1'); //'41'

//other operators will convert strings to numbers:
alert(2 - '1'); // 1
alert('6' / '2'); // 3

//Unary + converts non-number to number:
let y = -2;
alert(+y); // -2 still
alert( +true); //1
alert( +""); // 0

//so:
let apples = '2';
let oranges = '3';

alert(apples + oranges); // "23"
alert( +apples + +oranges); // 5

//chaining assignments
let human, man, woman;
human = man = woman = 2 + 2;
alert(human); //4
alert(man); //4
alert(woman); //4

