var plusOne = function (digits) {
  //start at last position 1,2,3 => the 3 will be visit first,
  for (var i = digits.length - 1; i >= 0; i--) {
    //always add one
    console.log(digits[i]);
    if (digits[i] < 9) {
      //case 1 , 1011 => 1012
      digits[i]++;
      return digits;
    } else {
      //case 2, 1099 => 1100, the next cycle will add one
      digits[i] = 0;
    }
  }
  //append 1 to the first, case3 9999=> 10000 , the case that all is 9
  digits.unshift(1);
  return digits;
};
