
const middle = function(array){
  let len = array.length;
  let res=[];
  if (len === 0 || len === 1 || len === 2) {
    return res;
  }else if (len % 2 === 0) {
    let len1 = len/2;
    res.push(array[len1-1]);
    res.push(array[len1]);
    //console.log(res);
    return res;
  }else if ( len % 2 !== 0) {
    let len1 = (len-1)/2;
    res.push(array[len1]);
    //console.log(res);
    return res;
  }
};

module.exports = middle;





