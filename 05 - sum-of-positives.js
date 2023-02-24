// Instructions:
// Using the array of numbers sum only the positive numbers
// e.g [-1, 2, -3, 4, -5]
// returns 6


function sumOfPositives(numbers) {
    let positiveSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            positiveSum += numbers[i];
        }
    }

    return positiveSum;
}


// DO NOT TOUCH TESTS BELOW
console.log(sumOfPositives([-1, 2, -3, 4, -5]) === 6 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(sumOfPositives([-2, 3, -4, -5, -10, 13]) === 16 ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');