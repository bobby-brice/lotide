const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("arrays with one or two elements, there is no middle. Return an empty array. []", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

it(" arrays with odd number of elements, an array containing a single middle element should be returned - middle([1, 2, 3, 4, 5]) // => [3]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
});

it("arrays with an even number of elements, an array containing the two elements in the middle should be returned - [1, 2, 3, 4, 5, 6]) => [3, 4]", () => {
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});

