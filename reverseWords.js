// Reverse Words

// Write a reverseWords function that accepts a string a parameter, and reverses each word in the string. Any spaces in the string should be retained.

function reverseWords(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}

reverseWords("This is an example!"); // returns  "sihT si na !elpmaxe"
reverseWords("double  spaces"); // returns  "elbuod  secaps"

