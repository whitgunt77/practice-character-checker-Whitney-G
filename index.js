const readline = require("readline-sync");

// Prompt the user for a word or phrase
let userInput = readline.question("Enter a word or phrase: ");

console.log(`\nYou entered: "${userInput}"`);
console.log(`The length of your input is: ${userInput.length} characters\n`);

// Prompt the user for an index number
let index = parseInt(readline.question("Enter an index number to find the character at that position: "));

// Use bracket notation to access the character
let character = userInput[index];

// Print the result
if (character === undefined) {
    console.log(`\nNo character found at index ${index}. Please enter a number between 0 and ${userInput.length - 1}.`);
} else {
    console.log(`\nThe character at index ${index} is: "${character}"`);
}