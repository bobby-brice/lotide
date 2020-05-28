const countLetters = function(sentence) {
  let countObj = {};
  let normalized = sentence.split(" ").join("").toLowerCase();
  for (const letters of normalized) {
    // console.log("letters: " + letters, "sentence: " + normalized);
    if (countObj[letters]) {
      countObj[letters] += 1;
    } else {
      countObj[letters] = 1;
    }
  }
  return countObj;
};

console.log(countLetters("bobby"));



