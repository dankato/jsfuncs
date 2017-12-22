// Reversing an Integer

// Given an integer, return an integer that is the reverse
// ordering of numbers.

function reverseInt(number) {
  const reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");
  if (number < 0) {
    return parseInt(reversed) * -1;
  }
  return parseInt(reversed);
}

reverseInt(123); // 321
reverseInt(50); // 5
reverseInt(-113); // -311

// refactored
function reverseInt(number) {
  const reversed = number
    .toString()
    .split("")
    .reverse()
    .join("");
  return parseInt(reversed) * Math.sign(number);
}

module.exports = reverseInt;
