/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 *
 * https://leetcode.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (45.44%)
 * Likes:    3310
 * Dislikes: 221
 * Total Accepted:    504.5K
 * Total Submissions: 1.1M
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red,
 * white, and blue respectively.
 *
 * Note: You are not suppose to use the library's sort function for this
 * problem.
 *
 * Example:
 *
 *
 * Input: [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Follow up:
 *
 *
 * A rather straight forward solution is a two-pass algorithm using counting
 * sort.
 * First, iterate the array counting number of 0's, 1's, and 2's, then
 * overwrite array with total number of 0's, then 1's and followed by 2's.
 * Could you come up with a one-pass algorithm using only constant space?
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function swap(nums, i, j) {
  let temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
/*

3 value type 2 pointer sorting method

*/

var sortColors = function (nums) {
  if (nums == null || nums.length == 0) return;
  //left control the position of green(1)
  let left = 0;
  //right control the position of blue(2)
  let right = nums.length - 1;

  let index = 0;
  while (index <= right) {
    if (nums[index] == 0) {
      swap(nums, index++, left++);
    } else if (nums[index] == 1) {
      index++;
    } else if (nums[index] == 2) {
      swap(nums, index, right--);
    }
  }
};
// @lc code=end
