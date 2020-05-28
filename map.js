const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = eqArrays(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//----------------------map exercise below-------------->


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item); -->full word in the words array
    // console.log('item AFTER: ', callback(item));-->first letter in each word per our callback fn below
    // console.log('---');
    results.push(callback(item));
  }
  return results;
};
//The MAP FUNCTION
const results1 = map(words, word => word[0]);//tells map what to perform
const results2 = map(words, word => word.length);
const results3 = map(numbers, num => num.toString());
// console.log(results1);



//TEST CASES
const test1 = ["g", "c", "t", "m", "t"];
const test2 = [5, 6, 1, 4, 2];
const test3 = ["1", "2", "3", "4", "5"];

assertArraysEqual(results1, test1); // => should PASS
assertArraysEqual(results2, test2); // => should FAIL-->length is wrong
assertArraysEqual(results3, test3); // => should PASS





