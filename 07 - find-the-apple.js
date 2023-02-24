// Instructions:
// Return the index of the apple within the array, in each test the
// apple will be in different position within the array
// e.g ['Peach', 'Banana', 'Apple', 'Grape']
// returns 2

function findTheApple(fruits) {
    let appleIndex = fruits.indexOf('Apple')
    return appleIndex
}


// DO NOT TOUCH TESTS BELOW
console.log(
    findTheApple(['Peach', 'Banana', 'Apple', 'Grape']) === 2 ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);

console.log(
    findTheApple(['Peach', 'Banana', 'Grape', 'Apple']) === 3 ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);

console.log(
    findTheApple(['Apple', 'Peach', 'Banana', 'Grape']) === 0 ?
        '✅ 01 - Test Passed' : '❌ 01 - Test Failed'
);