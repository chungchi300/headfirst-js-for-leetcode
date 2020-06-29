/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 *
 * https://leetcode.com/problems/power-of-two/description/
 *
 * algorithms
 * Easy (42.99%)
 * Likes:    861
 * Dislikes: 191
 * Total Accepted:    344.3K
 * Total Submissions: 789.4K
 * Testcase Example:  '1'
 *
 * Given an integer, write a function to determine if it is a power of two.
 *
 * Example 1:
 *
 *
 * Input: 1
 * Output: true
 * Explanation: 2^0 = 1
 *
 *
 * Example 2:
 *
 *
 * Input: 16
 * Output: true
 * Explanation: 2^4 = 16
 *
 * Example 3:
 *
 *
 * Input: 218
 * Output: false
 *
 *
 * fact, every power of 2 in binary code start at 1
 * 2: 10
 * 4: 100
 * 8: 1000
 * 16: 10000
 *
 *
 * n = 16: 10000
 * n = 15: 01111
 *
 * so the and of it will be 0
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) {
    return false;
  }
  let andResult = n & (n - 1);
  return andResult == 0;
};
// @lc code=end
