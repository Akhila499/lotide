const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;