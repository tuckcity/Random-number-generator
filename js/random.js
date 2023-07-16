// Collect input from a user
const lowString = prompt(`Enter a low number!`);
const highString = prompt(`Enter a high number!`);

// Convert the input to a number

const lowNumber = parseInt(lowString);
const highNumber = parseInt(highString);

const rangeNumber = highNumber - lowNumber + 1;
console.log(rangeNumber);

// const randomNumber = Math.floor(Math.random() * (rangeNumber) + lowNumber);

// console.log(`${randomNumber} is a number between ${lowNumber} and ${highNumber}!`);

if (rangeNumber) {
    const randomNumber = Math.floor(Math.random() * (rangeNumber) + lowNumber);

// Create a message displaying the random number

console.log(`${randomNumber} is a number between ${lowNumber} and ${highNumber}!`)
} else {
    alert(`You need to provide two numbers, please try again.`);
}


