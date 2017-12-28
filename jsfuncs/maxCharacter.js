// Find the Max Character

// Given a string, return the character that is most commonly used in the string.

// Similar Asked Questions to find Max Character
// What is the most common character in the string?
// Does string A have the same characters as string B (is it an anagram)?
// Does the given string have any repeated characters in it?

// to solve
// 'hello', key is the letter and value is the number of times it appears
// {
//   h: 1,
//   e: 1,
//   l: 2,
//   o: 1
// }

function maxCharacter(string) {
  const characterMap = {};
  let max = 0;
  let maxCharacter = "";

  for (let character of string) {
    if (!characterMap[character]) {
      characterMap[character] = 1;
    } else {
      characterMap[character]++;
    }
  }
  // console.log(characterMap);
  for (let character in characterMap) {
    if (characterMap[character] > max) {
      max = characterMap[character];
      maxCharacter = character;
    }
  }
  return maxCharacter;
}
maxCharacter("abcccd"); // c
maxCharacter("apple 12311"); // 1

for (let character of string) {
  characterMap[character] = characterMap[character] + 1 || 1;
}

module.exports = maxCharacter;
