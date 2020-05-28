const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "4",
  a: "1"
};
eqObjects(ab, ba); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
// eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);

