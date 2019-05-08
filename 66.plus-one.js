var plusOne = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    //always add one
    digits[i]++;
    if (digits[i] > 9) {
      //add one to original digit, and then add next digit by not return
      //if it is first digits, make all to 0
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  //unshift 1 to the first
  digits.unshift(1);
  return digits;
};
