//Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.

const flatten = function(arr) {
  const result = [];

  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });

  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));
// => [1, 2, 3, 4, 5, 6]