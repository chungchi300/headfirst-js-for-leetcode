/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.24%)
 * Total Accepted:    658.5K
 * Total Submissions: 2.6M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 *
 * Input: 123
 * Output: 321
 *
 *
 * Example 2:
 *
 *
 * Input: -123
 * Output: -321
 *
 *
 * Example 3:
 *
 *
 * Input: 120
 * Output: 21
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
//solution 1, text manipulation, slow
//solution 2, bitwise manipulation
function numToArr(num) {
  return num.toString().split("");
}
var reverse = function(x) {
  let numPart;
  let arr = numToArr(x);
  let ans;
  if (x < 0) {
    arr.shift(); // remove '-'
  }
  numPart = Number(arr.reverse().join(""));
  if (x < 0) {
    //add back the negative
    ans = numPart * -1;
  } else {
    ans = numPart;
  }
  var minn = -(1 << 30) * 2;
  var maxn = (1 << 30) * 2 - 1;
  if (ans < minn || ans > maxn) {
    return 0;
  } else {
    return ans;
  }
};
