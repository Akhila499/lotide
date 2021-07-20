const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  console.log(array);
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

console.log(tail([1,2,3]));
const words = ["Yo Yo", "Lighthouse", "Labs"];
let res = tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(res[0], "Lighthouse");
assertEqual(res[1], "Labs");