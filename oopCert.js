// Create a Constructor Function:
class Animal {
	// Write a constructor function named Animal that takes two parameters: name and species.
	constructor(name, species) {
		// Inside the constructor, assign these parameters to properties on the object being created.
		this.name = name
		this.species = species
	}

	// Add a method named makeSound to the Animal prototype that logs a message indicating the animal's sound.
	makeSound() {
		console.log(`This ${this.name} of kind species called ${this.species} make sound like this mweo`)
	}

}

// Create Instances of Animal:
// Create an instance of Animal named dog with the name "Buddy" and species "Dog".
const dog = new Animal('buddy', 'Dog')
// Create another instance of Animal named cat with the name "Whiskers" and species "Cat".
const cat = new Animal('Whiskers', 'Cat')
// Call the makeSound method on both dog and cat instances.
console.log(cat.makeSound())
// Create an ES6 Class:



// Define a class named Person using ES6 class syntax.
// The class should have a constructor that takes two parameters: name and age, and assigns them to properties.
class Person {
	constructor(name, age) {
		this.name = name
		this.age = age

	}
	// Add a method named greet that logs a greeting message using the person's name.
	greet() {
		console.log(`Hello ${this.name}, Good evening!!!!`)
	}
}
// Create an Instance of Person:

// Create an instance of the Person class named student with the name "Alice" and age 20.
const student1 = new Person('Alice', 20)
// Call the greet method on the student instance.
console.log(student1.greet())


// Extend the Person Class:

// Create a subclass of Person named Student that adds a new property named grade.
class Student extends Person {
	constructor(name, age, grade){
		super(name, age)
		this.grade = grade	
	}
	// Override the greet method in the Student class to include the student's grade in the greeting message.
	greet(){
		console.log(`Hello ${this.name}, this is your grade ${this.grade} for this semester`)
	}
}

// Create an Instance of Student:

// Create an instance of the Student class named studentInstance with the name "Bob", age 22, and grade "A".
const studentInstance = new Student("Bob", 22, "A")

// Call the overridden greet method on the studentInstance instance.

console.log(studentInstance.greet())


/**
 
Create a Book class with properties for title, author, and ISBN.
Create a Member class with properties for name and memberID.
Create a Library class that maintains an array of Book and Member objects.
Encapsulation: Ensure that properties are only accessible through methods (getters/setters).
Inheritance: Create a subclass PremiumMember that extends Member with additional benefits.
Polymorphism: Demonstrate polymorphism by creating a method to display member information, which behaves differently for Member and PremiumMember.
Testing: Write a function runLibrarySystem() that creates instances of Library, Book, Member, and PremiumMember, and invokes their methods to demonstrate functionality.

 */

class Book {
	constructor(title, author, ISBN){
		this.title = title
		this.author = author
		this.ISBN = ISBN
	}
}

class Member {
	constructor(name, memberID){
        this.name = name
        this.memberID = memberID
    }
}

class Library extends Member {
	constructor(name, memberID){
		super(name, memberID)
		this.books = []
	}
}