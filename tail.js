
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

//console.log(tail([1,2,3]));
module.exports = tail;
