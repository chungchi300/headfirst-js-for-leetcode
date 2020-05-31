/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 *
 * https://leetcode.com/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (47.98%)
 * Likes:    738
 * Dislikes: 193
 * Total Accepted:    270.9K
 * Total Submissions: 564.4K
 * Testcase Example:  '3'
 *
 * Given a non-negative index k where k ≤ 33, return the k^th index row of the
 * Pascal's triangle.
 *
 * Note that the row index starts from 0.
 *
 *
 * In Pascal's triangle, each number is the sum of the two numbers directly
 * above it.
 *
 * Example:
 *
 *
 * Input: 3
 * Output: [1,3,3,1]
 *
 *
 * Follow up:
 *
 * Could you optimize your algorithm to use only O(k) extra space?
 *
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let resMap = {};
  var getArr = function (row, col) {
    let r;
    if (col == 0 || row == col) {
      //end condition
      r = 1;
    } else {
      //looks magical right, because functional programing is more descriptive of the meaning instead of procedure like procedure programming
      //so in more time you only need to translate it meaning, more easy to right it correctly
      if (resMap[`${row},${col}`]) {
        r = resMap[`${row},${col}`];
      } else {
        r = getArr(row - 1, col) + getArr(row - 1, col - 1);
      }
    }
    resMap[`${row},${col}`] = r;
    return r;
  };
  let arr = [];
  for (let col = 0; col <= rowIndex; col++) {
    arr.push(getArr(rowIndex, col));
  }
  return arr;
};
// @lc code=end
