const jsc = require('jsverify');
const { quicksort} = require('./code.js');

const testSort = jsc.forall('array nat', function (arr) {

    quicksort(arr);

    const isAscending = arr.every((value, index) => index === 0 || value >= arr[index - 1]);

    return isAscending;
});

jsc.assert(testSort);
