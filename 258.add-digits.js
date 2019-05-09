/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  /*
Normally, a O(1) problem should be done in math. A good way to do this is using various inputs then finding a rule of their results.

    38 % 9 = 2, answer 2
    45 % 9 = 0, answer 9

    */
  return num % 9 === 0 ? 9 : num % 9;
};
