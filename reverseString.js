// Reverse String
// Given a string, return a new string with the reversed order of characters

// steps to solve
// 1. turn 'string' into an array
// 2. call 'reverse' method on the array (array.prototype.reverse())
// 3. join the array back into a string
// 4. return the result

// Solution 1 (using reverse helper)
function reverse(string) {
  return string
    .split("")
    .reverse()
    .join("");
}
reverse("esrever"); // 'reverse'

module.exports = reverse;

// Solution 2 (manual)

// steps to solve
// 1. create an empty string called 'reverse'
// 2. for loop, for each character in the string, take the character and add it to the start of 'reverse'
// 3. return the string

function reverse(string) {
  let reversed = "";
  for (let character of string) {
    reversed = character + reversed;
  }
  return reversed;
}

// using es6 syntax for for loop
// for, a temp variable being redeclared for every loop of 'character' of the irreratable object we want to itterate through, the string variable 'string', one by one. Then take that character and add it to the start of the string 'reversed' and return reversed.

reverse("esrever"); // 'reverse'
