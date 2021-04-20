// Usage: getRandomInt(6)
// Outputs a random number between 1 and 6
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Play a simple game of craps
// - Begin with the recipe (algorithm) and code from the first practice

// Store the value of the first die in memory. Write it out to the console in a human-readable format.
let die1 = getRandomInt(6)
console.log(`The first die is ${die1}`)

// Store the value of the second die in memory. Write it out to the console in a human-readable format.
let die2 = getRandomInt(6)
console.log(`The second die is ${die2}`)

// Store the value of the total of the two dice in memory. Write it out to the console in a human-readable format.
let diesum = die1 + die2
console.log(`The sum of the two dies is ${diesum}`)

// - Implement the (basic) rules of craps:
//   - If the total of the two dice is 7 or 11, the player wins
//   - If the total of the two dice is 2, 3, or 12, the player loses
//   - If the total is anything else, the "point" is set, e.g. "the point is 6"

if (diesum == 7 || diesum == 11) {
  console.log(`Player wins`)
} else if (diesum == 2 || diesum == 3 || diesum == 12) {
  console.log(`Player loses`)
} else {
  console.log(`The point is ${diesum}`) 
} 
