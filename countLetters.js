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

const countLetters = function(sentence) {
  let countObj = {};
  let normalized = sentence.split(" ").join("").toLowerCase();
  for (const letters of normalized) {
    console.log("letters: " + letters, "countObj: " + countObj);
    if (countObj[letters]) {
      countObj[letters] += 1;
    } else {
      countObj[letters] = 1;
    }
  }
  return countObj;
};

console.log(countLetters("lighthouse brighthouse"));

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
