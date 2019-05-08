/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */

/*

 */
var getValIfNaN = function(num) {
  //this can rewrite to num||0
  //remember javascript NaN == NaN always return false, so don't use it
  if (isNaN(num)) {
    num = 0;
  }

  return num;
};
var myAtoi = function(str) {
  let num = parseInt(str);
  num = getValIfNaN(num);

  let capTopNum = Math.min(num, 2147483647);
  let capTopAndMinNum = Math.max(capTopNum, -2147483648);
  return capTopAndMinNum;
};
