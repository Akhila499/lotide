const assertEqual = function(actual, expected) {
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  if (actual === expected) {
    console.log(`${emojiPass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${emojiFail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (array1, array2) {
  
  if(array1.length !== array2.length) {
    
    return false;

  }

  for (let i = 0; i < array1.length; i++) {
    
    if(array1[i] !== array2[i]){
      return false;
    }
    
    
  }
  return true;
  
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(); // => false

console.log(); // => true
console.log(); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL