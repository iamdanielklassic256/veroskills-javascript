// this is a single comment

/*
this
is 
a multi-line comment
*/

//var let const
let username = 'Daniel';
username = 'Okumu';

const age = 15;
// age = 40;

console.log(typeof null)
console.log(typeof undefined)


//addition subtraction mutiplication division remainder modulus increment decrement


console.log(2 == '2') //weakly typed
console.log(2 === '2') //strictly typed
console.log(3 <= 40) //true

//AND OR NOT

console.log(20 < 30 && 30 > 20)  //true 
console.log(20 >= 30 || 10 > 20)  //true 
console.log(!true)

console.log(username + age);


console.log(`My name is ${username} and I am ${age}`)

if (age >= 18) {
	console.log('You can drive a car');
}
else {
	console.log('You are too young!!')
}

let trafficLight = 'Violet';

if (trafficLight === 'Yellow') {
	console.log('You can wait little bit..')
}
else if (trafficLight === 'Green') {
	console.log('You can cross the road')
}
else if (trafficLight === 'Red') {
	console.log('Dont cross the road')
}
else {
	console.log('Invalid traffic light color')
}

let today = 'Monday';

switch (today) {
	case 'Sunday':
		console.log('Today is Sundat')
		break
	case 'Monday':
		console.log('Today is Monday')
		break;
	case 'Tuesday':
		console.log('Today is Tuesday')
		break;
	case 'Wednesday':
		console.log('Today is Wednesday')
		break
	case 'Thursday':
		console.log('Today is Thursday')
		break;
	case 'Friday':
		console.log('Today is Friday')
		break;
	case 'Saturday':
		console.log('Today is Saturday')
	break;
	default:
		console.log('Invalid day')
}

console.log(2 + '2'); //22

// const Age  = String(25);
const Age  = 25;

console.log(Age.toString());

let date = Number('25');
date = parseInt(date, 10);


console.log(3 == '3'); //lowly typed
console.log(3 === '3'); //false

//null undefined false NaN 0;

// const age = 30

if(age <=30) {
	console.log('You are young')
}

age <= 50 ? console.log('You are too young') : console.log('You are old enough');


//function declaration
function Hello(){
	console.log(2+4)
}
Hello()


//function expression
const Greetings = function(){
	console.log(2+5);
}
Greetings()

//arrorw function
const Hello2 = () => {
	console.log('Arrow function')
}
Hello2();


const myArray = ['Dan', 'Daemon', 'Jess'];


console.log(myArray[1]);

const myArray2 = Array('Daniel',  'Eric', 'Sam')

const userdata = {
	name: 'Daniel',
	age: 25,
	country: 'Uganda'
}
console.log(userdata.country)

// console.log('1')
// console.log('2')
// console.log('3')
// console.log('4')
// console.log('5')
// console.log('6')

// for(let index = 0; index <=6; index++){
// 	console.log(index)
// }

let number  = 10;

while(number >= 1){
	console.log(number)
	number--;
}

//JSON - 

const auth_names = {
	
}