

const numbers = [1,2,3,4,5,6,7,8,9,10];

const squaredNumber = [];


numbers.map((number) => {
	squaredNumber.push(number * number)

})
// console.log(numbers)
// console.log(squaredNumber)

const fruits = ['apple', 'orange', 'mango', 'pineapple', 'lemon']

const users = {
	name: "Damons",
	email: "damons@gmail.com",
	age: 30
}

for(const fruit of fruits) {
	console.log(fruit)
}

for(const user in users) {
	console.log(`${user}: ${users[user]}`)
}


const expenses = [
	{
		name: 'Andrews',
		age: 30,
		amount: 100
	},
	{
		name: 'Daniel',
		age: 25,
		amount: 50
	},
	{
		name: 'John',
        age: 35,
        amount: 200
	}
]

expenses.filter(expense =>{
	if(expense.amount > 70) {
		console.log(expense)
	}
})


const nos = [1, 2, 3, 4, 5, 6, 7];
//array.reduce(callback, initialValue)
const sum = nos.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum)


const name = 'Damon Andrews'

console.log(`Hello ${name}, Good morning, hope you are fine`)


const food = ['beans', 'rice', 'meat', 'chicken']

const newFood = ['carrots', ...food]

console.log(newFood)



const Hello = () => {
	console.log('Hello World')
}
Hello()