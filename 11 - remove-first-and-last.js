// Instructions:
// Return the string passed as a parameter with the first and last character removed.

// e.g. 'hello' --> 'ell'

function wordFormatter(word) {
    word.remove(word[0], word[word.length]);
    return  word;
}

// DO NOT TOUCH TESTS BELOW
console.log(wordFormatter('hello') === 'ell' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('tiger') === 'ige' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(wordFormatter('chocolate') === 'hocolat' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')