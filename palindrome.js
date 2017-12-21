// Palindrome

// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.

// Solution 1 (direct)
function palindrome(string) {
  // reverse string
  const reversed = string
    .split("")
    .reverse()
    .join("");
  return string === reversed;
}

palindrome("abba"); // true
palindrome("abcdefg"); // false

// Solution 2 (array helper, every() but does 2x as much work than it needs to do)

// every()
// example: you have an array [0, 6, 9], is 'every' value greater than 5?
// array.every( (value) => value > 5);
// is 0 > 5, return false
// is 6 > 5, return true
// is 9 > 5, return true
// when the every funciton runs, it checks the return value of every run
// if any false, the overall function will return false

function palindromeE(string) {
  return string.split("").every((character, index) => {
    return character === string[string.length - index - 1];
  });
}

// note this solution contains extra work, double comparison
// [a, c, c, b, a], example the first check is with the 1st a and the last a, but the last check is with the last a and the first a, double comparision.
palindromeE("abba"); // true
palindromeE("abcdefg"); // false

module.exports = palindrome;
