/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 *
 * https://leetcode.com/problems/move-zeroes/description/
 *
 * algorithms
 * Easy (57.34%)
 * Likes:    3604
 * Dislikes: 120
 * Total Accepted:    804K
 * Total Submissions: 1.4M
 * Testcase Example:  '[0,1,0,3,12]'
 *
 * Given an array nums, write a function to move all 0's to the end of it while
 * maintaining the relative order of the non-zero elements.
 *
 * Example:
 *
 *
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Note:
 *
 *
 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//just bubbling zero to right,no sorting !!
// time complexity, O(n)
var moveZeroes = function (nums) {
  if (nums == null || nums.length == 0) {
    return;
  }
  let lastZeroPosition = 0;
  for (let i = 0; i < nums.length; i++) {
    //only swapping between number & non zero between last zero position when there is non-zero

    //and PS. it will actually self-swapping when 1,1,3,1,0,12
    //the beautiful thing in there is when there is zero and not enter the loop, it already mark the position, it is an **implicity assign**, I think the readability can increase when explicit assign.
    if (nums[i] != 0) {
      let temp = nums[i];
      console.log(
        "swapping",
        nums[lastZeroPosition],
        nums[i],
        i,
        lastZeroPosition
      );
      nums[i] = nums[lastZeroPosition];
      nums[lastZeroPosition++] = temp;
    }
  }
};
// @lc code=end
