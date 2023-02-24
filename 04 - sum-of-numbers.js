// Instructions:
// Return the sum of the numbers within the array
// e.g [1,2,3,4,5]
// returns 15


function sumOfNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}


// DO NOT TOUCH TESTS BELOW
console.log(sumOfNumbers([1, 2, 3, 4, 5]) === 15 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(sumOfNumbers([3, 7, 3, 4, 6]) === 23 ? '✅ 02 - Test Passed' : '❌ 02 - Test Failed');