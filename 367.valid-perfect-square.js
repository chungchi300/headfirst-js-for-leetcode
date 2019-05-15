/*
Relation
Math rule, squared number must be < number/2
e.g squat root for 16 is 4, which is smaller then 16/2 = 8


*/
var isPerfectSquare = function(num) {
  if (num === 0 || num === 1) {
    return true;
  }
  return search(num, 2, num / 2);
};
/*
Recursive function, num is immutable

*/
function search(num, left, right) {
  if (right <= left) {
    return left * left === num;
  }
  var mid = Math.floor((left + right) / 2);
  //   console.log("left", left, "right", right, "mid", mid, "num", num);

  /*

  isPerfectSquare(100);
 left 2 right 99 mid 50 num 100
 left 2 right 49 mid 25 num 100
 left 2 right 24 mid 13 num 100
 left 2 right 12 mid 7 num 100
 left 8 right 12 mid 10 num 100

*/
  var sqmid = mid * mid;
  if (sqmid === num) {
    return true;
  }
  return sqmid > num ? search(num, left, mid - 1) : search(num, mid + 1, right);
}
