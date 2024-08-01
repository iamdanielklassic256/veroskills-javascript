//ABSTRACTION ACTION IN OOP


// const array = []

// array.map




//this keyword
// console.log(this)


function Person(name, age){
	this.name = name
    this.age = age
}

// const newUser = new Person('Daniel', 25)

// console.log(newUser)

// console.log(Person.prototype === newUser.__proto__)

// OOP CHALLENGE ONE
const arrayNames = ['Daniel', 'Jessica', 'Polline', 'Lorna'];


// function Person(name){
// 	this.name = name
// }

// const newArray = [];


// for(const name of arrayNames){
// 	newArray.push(new Person(name))
// }

// console.log(newArray)

// const [Daniel, Jessica, Polline, Lorna] = newArray;

// console.log(Daniel)


const objDaniel = {
	name: 'Daniel',
    age: 25,
	isDev: true,
    city: 'Kampala'
}

const objJessica = {
	name: 'Jessica',
    age: 19,
	ready: false,
    city: 'Gulu'
}

const makeTheProtocol = {
	isReady: function(){
		if(this.ready){
			console.log(`Hello, ${this.name} is ready for marriage`)
		}
		else{
            console.log(`Hello, ${this.name} is not ready for marriage yet`)
        }
	},
	getDev: function(){
		console.log(`${this.name} is a Software Engineer`)
	}
}