//return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  console.log("source:" + source, "removes:" + itemsToRemove);
  return source.filter(i => !itemsToRemove.includes(i));
};

// console.log(without([1, 2, 3], [1])); // => [2,3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

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

assertArraysEqual(without([1,2,3], [1]),[2,3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);