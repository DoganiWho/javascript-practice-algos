// Instructions:
// Return the string passed as a parameter with the first and last character removed.

// e.g. 'hello' --> 'ell'

function wordFormatter(word) {
 let trimmedWord = "";
 for (var i = 1; i < word.length - 1; i++) {
  trimmedWord += word[i];
 }
 return trimmedWord
}

// DO NOT TOUCH TESTS BELOW
console.log(wordFormatter('hello') === 'ell' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('tiger') === 'ige' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('chocolate') === 'hocolat' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')