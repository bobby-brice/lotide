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

module.exports = middle;

