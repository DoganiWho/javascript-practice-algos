// Instructions:
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// e.g. [1, 2, 3, 4, -11, -12, -13, -14, -15]
// returns [4, -65]


function countPositivesSumNegatives(numbersArray) {
    let positiveNumberSum = 0;
    let negativeNumberSum = 0;

    for (let i = 0; i < numbersArray.length; i++) {
        numbersArray[i] > 0 ? positiveNumberSum += numbersArray[i] : negativeNumberSum += numbersArray[i];
    }
    return [positiveNumberSum, negativeNumberSum];
}


// DO NOT TOUCH TESTS BELOW
console.log(
    countPositivesSumNegatives(
        [1, 2, 3, 4, -11, -12, -13, -14, -15]) === [4, -65] ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);

console.log(
    countPositivesSumNegatives(
        [1, 2, 3, 4, 5, 6, 7, -11, -12]) === [7, -23] ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);


console.log(
    countPositivesSumNegatives(
        [3, 7, -18, -12]) === [7, -30] ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);