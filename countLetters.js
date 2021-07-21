const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  //console.log(actual,expected);
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${emojiPass} Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {

  let charCount = {};
  for (let char of str) {
    //console.log(char);
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
  delete charCount[' '];
  //console.log(charCount);
  return charCount;
};
assertEqual(countLetters('lighthouse in the house'),{ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });