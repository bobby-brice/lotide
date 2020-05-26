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

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 5]); // => should FAIL
assertArraysEqual(["1", 2, 3], [1, "2", 3]); // => should FAIL
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => should PASS

 
