const bigOrSmall = new Promise((resolve, reject) => {
	const randomNumber = Math.random()
	if(randomNumber < 0.5){
		resolve("The number is small: " + randomNumber)
	}
	else{
		reject({
			message: "The number is big: " + randomNumber,
            code: 500,
			number: randomNumber,
            type: "INTERNAL_SERVER_ERROR"
		})
	}
})

// console.log(bigOrSmall)

// bigOrSmall.catch((err) => {
// 	console.log(err)
// }).then(() => {
// 	console.log("The promise was fulfilled")
// }).finally(() => {
// 	console.log("The promise was completed")
// })

const isGoodAtMath = true;

function handleMathSkills(resolveFunction, rejectedFunction) {
	if(isGoodAtMath){
		resolveFunction({
			mssg: "Yes you are good at Math"
		})
	}
	else{
        rejectedFunction({
            mssg: "No you are not good at Math"
        })
    }
}

function resolveFunction(successObj){
	console.log(successObj.mssg)
}

function rejectedFunction(rejectedObj){
console.log(rejectedObj.mssg)
}

// handleMathSkills(resolveFunction, rejectedFunction)



//ASYNCHRONOUS CHALLENGE

fetch('https://swapi.dev/api/people')
.then((res) => res.json())
.then((data) => {
	const firstThreePeope = data?.results.slice(0,3)
	console.log(firstThreePeope)
	document.querySelector('.name-1').textContent += firstThreePeope[0].name
	document.querySelector('.name-2').textContent += firstThreePeope[1].name
	document.querySelector('.name-3').textContent += firstThreePeope[2].name
})