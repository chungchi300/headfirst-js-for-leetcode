/*
 * @lc app=leetcode id=240 lang=javascript
 *
 * [240] Search a 2D Matrix II
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 *
 * algorithms
 * Medium (42.73%)
 * Likes:    3003
 * Dislikes: 75
 * Total Accepted:    310.4K
 * Total Submissions: 723.4K
 * Testcase Example:  '[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]\n5'
 *
 * Write an efficient algorithm that searches for a value in an m x n matrix.
 * This matrix has the following properties:
 *
 *
 * Integers in each row are sorted in ascending from left to right.
 * Integers in each column are sorted in ascending from top to bottom.
 *
 *
 * Example:
 *
 * Consider the following matrix:
 *
 *
 * [
 * ⁠ [1,   4,  7, 11, 15],
 * ⁠ [2,   5,  8, 12, 19],
 * ⁠ [3,   6,  9, 16, 22],
 * ⁠ [10, 13, 14, 17, 24],
 * ⁠ [18, 21, 23, 26, 30]
 * ]
 *
 *
 * Given target = 5, return true.
 *
 * Given target = 20, return false.
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  //not typical binary search, but mentality is the same, use 1 big element to do the compare which can represent lot of elements
  let row = 0;

  if (matrix.length == 0) {
    console.log("matrix length is zero");
    return false;
  }
  let col = matrix[0].length - 1;
  //iterating all rows,
  while (col >= 0 && row <= matrix.length - 1) {
    //3. found the element
    if (target == matrix[row][col]) {
      console.log("found the element");
      return true;
      //2. col from last to first in order to find the element in that row
    } else if (target < matrix[row][col]) {
      console.log("adjusting the col");
      col--;
      //1. go to the specific row
    } else {
      console.log("adding the row");
      row++;
    }
  }
  return false;
};
// @lc code=end
