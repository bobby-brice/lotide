const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns each item after the first index in the array ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns 2 for the length of the array after slice", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length , 2);
  });

  it("returns 'Lighthouse' as the first index for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });
});