/*
    by math definition, sqrt number base cannot be bigger then x/2 
    e.g 
    100 = 10*10
    25 = 5*5
    9 = 3*3

    It just do  the binary spliting at the beginning, we cannot said it is binary search
    
  */
var mySqrt = function(x) {
  var left = 1;

  var right = Math.floor(x / 2) + 1;
  var mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (mid * mid > x) {
      right = mid - 1;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return right;
};
