// Instructions:
// Create a function that takes an integer as a parameter and returns "Even" for even numbers or "Odd" for odd numbers.


function evenOrOdd(number) {
   number % 2 === 0 ? 'Even': 'Odd';
}

// DO NOT TOUCH TESTS BELOW
console.log(evenOrOdd(2) === 'Even' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(evenOrOdd(24) === 'Even' ? '✅ 02 - Test Passed' : '❌ 02 - Test Failed');
console.log(evenOrOdd(1) === 'Odd' ? '✅ 03 - Test Passed' : '❌ 03 - Test Failed');
console.log(evenOrOdd(3) === 'Odd' ? '✅ 04 - Test Passed' : '❌ 04 - Test Failed');
