/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (64.92%)
 * Likes:    4384
 * Dislikes: 158
 * Total Accepted:    868.1K
 * Total Submissions: 1.3M
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 *
 * Note:
 *
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 *
 * Example 1:
 *
 *
 * Input: [2,2,1]
 * Output: 1
 *
 *
 * Example 2:
 *
 *
 * Input: [4,1,2,1,2]
 * Output: 4
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 0101^0001 = 0100 = 4, same 1 cancel, different 1 remain
  let res = 0;
  //2,2 same cancel other
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i];
    console.log({ res });
  }
  return res;
};
// @lc code=end
