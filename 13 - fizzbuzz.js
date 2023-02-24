// Instructions:
// numbers divisible by 3 & 5 return 'Fizzbuzz'
// numbers divisible by 3 return 'Fizz'
// numbers divisible by 5 return 'Buzz'

// The function should be able to take on any number and follow the conditions above


function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'Fizzbuzz'
    } else if (number % 3 === 0 && number % 5 === 1) {
        return 'Fizz'
    } else {
        return 'Buzz'
    }
}

console.log(fizzbuzz(15) === 'Fizzbuzz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(fizzbuzz(6) === 'Fizz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')

console.log(fizzbuzz(10) === 'Buzz' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed')