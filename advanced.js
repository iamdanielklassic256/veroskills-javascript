const eleH1 = document.querySelector('h1');
const Output = document.querySelector('.output');
const btn = document.querySelector('button');
const myInput = document.querySelector('input');


btn.addEventListener('click', getData)
const url = 'https://randomuser.me/api/?results=';

function getData(){
	console.log(myInput.value)

	const newUrl = `${url}${myInput.value}`
	console.log(newUrl)
	fetch(newUrl)
	.then((response) => response.json())
	.then((data) => {
        console.log(data.results)
        outputData(data.results)
    })
}


function outputData(results) {
	results.forEach(person => {
		createRecord(person)
	})
}


function createRecord(person, index) {
	// console.log("person: ", person)
	const ele = document.createElement('div');
	Output.append(ele)
	ele.innerHTML = `
        <h2>Person:  ${person.id.name}  ${person.id.value}</h2>
        <p>Name: ${person.name.title} ${person.name.first} ${person.name.last}</p>
        <p>Email: ${person.email}</p>
        <p>City: ${person.location.city}</p>
		`
}
