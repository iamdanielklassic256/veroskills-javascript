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


function Person(name){
	this.name = name
}

const newArray = [];


for(const name of arrayNames){
	newArray.push(new Person(name))
}

console.log(newArray)

const [Daniel, Jessica, Polline, Lorna] = newArray;

console.log(Daniel)