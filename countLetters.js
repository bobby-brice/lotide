const countLetters = function(sentence) {
  let countObj = {};
  let normalized = sentence.split(" ").join("").toLowerCase();
  for (const letters of normalized) {
    // console.log("letters: " + letters, "sentence: " + normalized);
    if (countObj[letters]) {
      countObj[letters] += 1;
      console.log("countObj[letters]:" + countObj, "letters" + letters);
    } else {
      countObj[letters] = 1;
      console.log("countObj[letters]:" + countObj[letters]);
    }
  }
  return countObj;
};

console.log(countLetters("bobby"));



