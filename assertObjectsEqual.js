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

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  let emojiFail = String.fromCodePoint(0x1F534);
  let emojiPass = String.fromCodePoint(0x1F7E2);
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`${emojiPass} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }else{
    console.log(`${emojiFail} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);

  }

};

assertObjectsEqual({a:1,b:2, c:[1,2]},{a:1,b:2, c:[1,2]});
assertObjectsEqual({a:1,b:2, c:[1,3]},{a:1,b:2, c:[1,2]});