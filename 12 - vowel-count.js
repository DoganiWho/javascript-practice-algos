// Instructions:
// Return the count of vowels within the string
// The vowels counted will be a,e,i,o,u
// e.g. elephant --> 3

const VOWELS = ["a", "e", "i", "o", "u"];


const vowelCount = (string) => {
 let vowelCounter = 0;
 for (var i = 0; i < string.length; i++) {
  for (var j = 0; j < VOWELS.length; j++) {
   if (string[i] === VOWELS[j]) {
    vowelCounter++
   }
  }
 }
 return vowelCounter
}


// DO NOT TOUCH TESTS BELOW
console.log(vowelCount('elephant') === 3 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(vowelCount('pizza') === 2 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(vowelCount('magic') === 2 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')