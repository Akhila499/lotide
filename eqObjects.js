const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
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


const eqObjects = function(actual, expected) {
  let actualArray = Object.keys(actual);
  let expectedArray = Object.keys(expected);
  let tt;
  if (actualArray.length === expectedArray.length) {
   
    for (let act of actualArray) {
   
      if (actual[act] === expected[act]) {
        if (Array.isArray(actual[act])) {
          tt = eqArrays(actual[act],expected[act]);
        } else {
          tt = true;
        }
        
      } else if (Array.isArray(actual[act])) {
        tt = eqArrays(actual[act],expected[act]);
      } else {
        tt = false;
      }

    }
    return tt;
  } else {
    return false;
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(eqObjects(ab,ba));
const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));