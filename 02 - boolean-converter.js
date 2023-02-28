// Instructions:
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

function booleanToWord(boolean) {
   if (boolean === true) {return "Yes"} else  {return "No"};
}



// DO NOT TOUCH TESTS BELOW
console.log(booleanToWord(true) === 'Yes' ? '✅ 01 - Test Passed' : '❌ 01 - Test Failed');
console.log(booleanToWord(false) === 'No' ? '✅ 02 - Test Passed' : '❌ 02 - Test Failed');