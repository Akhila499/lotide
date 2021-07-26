const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle'); 
const eqArrays = require('../eqArrays');

console.log(middle([1,2,3,4]));

assertArraysEqual(middle([1,2,3,4]),[2,3]);
eqArrays(middle([1,2,3]),[2]);