// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // anything that's not digit, letter (incl underscore by |_)
  const rx = /[^\w]|_/g;
  return stringA.toLowerCase().replace(rx, '').split('').sort().join('') === stringB.toLowerCase().replace(rx, '').split('').sort().join('');
}
// anagrams('RAIL!_ SAFETY!', 'fairy tales')


module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   // anything that's not digit, letter (incl underscore by |_)
//   const rx = /[^\w]|_/g;
//   stringA = stringA.toLowerCase().replace(rx, '');
//   stringB = stringB.toLowerCase().replace(rx, '');
//   if (stringA.length !== stringB.length) { return false; }
//   for (let char of stringA) {
//     let index = stringB.indexOf(char);
//     if (index === -1) {
//       return false;
//     } else {
//       stringB = stringB.slice(0, index) + stringB.slice(index + 1);
//     }
//   }
//   return true;
// }
