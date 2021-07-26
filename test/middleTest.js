// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle'); 
// const eqArrays = require('../eqArrays');

// console.log(middle([1,2,3,4]));

// assertArraysEqual(middle([1,2,3,4]),[2,3]);
// eqArrays(middle([1,2,3]),[2]);

const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it('returns [2,3] when input is [1,2,3,4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
  it('returns [2] when input is [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});