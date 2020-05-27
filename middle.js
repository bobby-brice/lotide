const isEqual = function(arr1, arr2) {
  let result = true;
  if (arr1.length !== arr2.length) {
    result = false;
  }

  for (let i = 0; i < arr1.length && result; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  const result = isEqual(arr1, arr2);
  if (result) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
//The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

//For arrays with one or two elements, there is no middle. Return an empty array.
//middle([1, 2]) // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.
//middle([1, 2, 3, 4, 5]) // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned
//middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

const middle = function(arr) {
  let newArr = [];
  let length = (arr.length - 1) / 2;
  if (arr.length <= 2) {
    newArr = [];
  } else if (arr.length % 2 === 0) {
    newArr.push(arr[Math.floor(length)]);
    newArr.push(arr[Math.ceil(length)]);
  } else {
    newArr.push(arr[length]);
  }
  return newArr;
};

assertArraysEqual(middle([1]), []);// => []
assertArraysEqual(middle([1, 2]), []);// => []
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);// => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);// => [3]