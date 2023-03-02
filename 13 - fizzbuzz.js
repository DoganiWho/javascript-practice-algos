// Instructions:
// numbers divisible by 3 & 5 return 'Fizzbuzz'
// numbers divisible by 3 return 'Fizz'
// numbers divisible by 5 return 'Buzz'

const { PassThrough } = require("stream");

// The function should be able to take on any number and follow the conditions above

function fizzbuzz(number) {
    const divisibleByThree = number % 3 === 0
    const divisibleByFive = number % 5 === 0
    if (divisibleByThree && divisibleByFive) {
        return 'Fizzbuzz'
    } else if (divisibleByThree && !divisibleByFive) {
        return 'Fizz'
    } else if (divisibleByFive && !divisibleByThree) {
        return 'Buzz'
    } else return number;
}

console.log(fizzbuzz(13) === 13 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

// DO NOT TOUCH TESTS BELOW

console.log(fizzbuzz(15) === 'Fizzbuzz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(fizzbuzz(6) === 'Fizz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(fizzbuzz(10) === 'Buzz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')