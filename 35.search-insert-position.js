/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 *
 * https://leetcode.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (41.66%)
 * Likes:    2344
 * Dislikes: 249
 * Total Accepted:    628.9K
 * Total Submissions: 1.5M
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * Given a sorted array and a target value, return the index if the target is
 * found. If not, return the index where it would be if it were inserted in
 * order.
 *
 * You may assume no duplicates in the array.
 *
 * Example 1:
 *
 *
 * Input: [1,3,5,6], 5
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: [1,3,5,6], 2
 * Output: 1
 *
 *
 * Example 3:
 *
 *
 * Input: [1,3,5,6], 7
 * Output: 4
 *
 *
 * Example 4:
 *
 *
 * Input: [1,3,5,6], 0
 * Output: 0
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = lowIndex + parseInt((highIndex - lowIndex) / 2);
    if (nums[midIndex] > target) {
      highIndex = midIndex - 1;
    } else if (nums[midIndex] < target) {
      lowIndex = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return lowIndex;
};
// @lc code=end
