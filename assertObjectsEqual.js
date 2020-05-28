const eqObjects = function(object1, object2) {
  let key = Object.keys(object1); //->[ 'a', 'b' ]
  // console.log(key);
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;

  for (const prop of key) {
    // console.log("prop: " + prop, "key: " + key);
    if (object1[prop] !== object2[prop]) {
      // console.log("obj1: " + object1[prop], "obj2: " + object2[prop]);
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // console.log("actual: " + actual);
  const inspect = require('util').inspect;
  
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
eqObjects(ab, ba); // => true
console.log(eqObjects(ab, ba));

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
// eqObjects(ab, abc); // => false
assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), true);
