const words = ["ground", "control", "to", "major", "tom"];
const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (eqArrays(actual, expected)) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }

};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.slice(1,3));


console.log(results3);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ['ro', 'on', 'o', 'aj', 'om']);

