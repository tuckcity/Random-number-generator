// Collect input from a user
const lowString = prompt(`Enter a low number!`);
const highString = prompt(`Enter a high number!`);

// Convert the input to a number
const lowNumber = parseInt(lowString);
const highNumber = parseInt(highString);

// Create the range to apply to the random generator
const rangeNumber = highNumber - lowNumber + 1;

// Check if numbers were entered into the prompt
if (rangeNumber) {
    const randomNumber = Math.floor(Math.random() * (rangeNumber) + lowNumber);

// Create a message displaying the random number
console.log(`${randomNumber} is a number between ${lowNumber} and ${highNumber}!`)

// If error, prompt user to enter a number
} else {
    alert(`You need to provide two numbers, please refresh the page and try again.`);
}

