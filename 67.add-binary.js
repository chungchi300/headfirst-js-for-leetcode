var addBinary = function(a, b) {
  var result = "";
  var i = a.length - 1;
  var j = b.length - 1;
  var carry = 0;
  //for rightmost digit to leftmost  digit
  while (i >= 0 || j >= 0 || carry > 0) {
    carry += i >= 0 ? parseInt(a[i--]) : 0;
    carry += j >= 0 ? parseInt(b[j--]) : 0;
    console.log("carry", carry);
    result = (carry % 2) + result;
    //remember parseInt(1/2) = 0, it will end
    carry = parseInt(carry / 2);
  }

  //emulator

  /*
  remember before the loop carry is 0
  i  j  result afterLoopCarry  
  1  1  0      1             
  1  0  00     1
  0  0  100    0

every result is determined by i,j,previous carry

  */
  return result;
};
