// Instructions
// Setup: Create an HTML file and a JavaScript file. Copy the provided HTML into your HTML file.
// JavaScript Functions:
// Create a function fetchWeatherWithPromise() that fetches weather data from a public API using Promises and displays it.
// Create a function fetchWeatherWithAsyncAwait() that fetches weather data from a public API using async/await and displays it.
// Using Fetch API:
// Use the fetch API to make an AJAX request to a public weather API (like OpenWeatherMap).
// Parse the JSON response and display it on the web page.
// Handling Errors: Implement error handling using .catch() for Promises and try...catch for async/await.
// Testing: Use the provided HTML button to trigger the data fetch functions and observe the results on the web page.



//https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY'

const weatherApi = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY'


function fetchWeatherWithPromise() {
	fetch(weatherApi)
		.then(res => res.json())
		.then(data => console.log(data))
		.catch(error => console.error(error));

		


}
fetchWeatherWithPromise()

async function fetchWeatherWithAsyncAwait() {

	// .catch(error => console.error(error))
	// .finally(console.log('Data fetched succesfully'))
	try {
		const response = await fetch(weatherApi)
		const data = await response.json()
			.then(data => {
				if(data.length === 0) {
					console.log('No data found')
                    return
				}
				else{
					data.map(item => {})
				}
			})
	}
	catch(error){
		console.error(error)
	}

}

fetchWeatherWithAsyncAwait()


console.log('hello 1')
function hello(){
	setTimeout(()=> {
		console.log('Hello 2')
	}, 3000)
}

hello()

console.log('hello 3')


const Hello = (name) => {
	this.name = name
	console.log(`Hello ${this.name}`)
}
Hello('Daniel')

function Hello2(name) {
	this.name = name
	console.log(`Hello ${this.name}`)
}
Hello2('Daniel2')