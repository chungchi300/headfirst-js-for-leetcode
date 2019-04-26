/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string} s
 * @return {number}
 */
/* slow personal
function twoOrOneCharsToNum(charString) {
  //   console.log("charString", charString);
  const mappingForOne = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  const mappingForTwoWhenSpecial = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  };
  const specialMapping = mappingForTwoWhenSpecial[charString];
  if (specialMapping) {
    return { isSpecial: true, val: specialMapping };
  } else {
    return { isSpecial: false, val: mappingForOne[charString.substring(0, 1)] };
  }
}
var romanToInt = function(s) {
  if (s.length == 0) {
    return 0;
  }
  let total = 0;
  for (let i = 0; i < s.length; ) {
    const charStringLength = s.length - i >= 2 ? 2 : 1;
    // console.log("charStringLength", charStringLength);
    const result = twoOrOneCharsToNum(s.substring(i, i + charStringLength));
    // console.log("result", result);
    total += result.val;
    if (result.isSpecial) {
      i = i + 2;
    } else {
      i = i + 1;
    }
  }
  return total;
};
 */

var romanToInt = function(s) {
  var hash = {};
  hash["I"] = 1;
  hash["X"] = 10;
  hash["C"] = 100;
  hash["M"] = 1000;
  hash["V"] = 5;
  hash["L"] = 50;
  hash["D"] = 500;

  var sum = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    //e.g I
    var item = hash[s[i]];

    var nextItem = i + 1 === len ? 0 : hash[s[i + 1]];
    /*
    finding the special that when next item is bigger then previous, it must be 
   IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
    */
    if (nextItem > item) {
      sum += nextItem - item;
      //move two character
      i++;
    } else {
      sum += item;
    }
  }

  return sum;
};
