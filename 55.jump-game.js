/*
 * @lc app=leetcode id=55 lang=javascript
 *
 * [55] Jump Game
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false; // max steps cannot reach position i
    //max step from next i, nums[i]+existing pos, not allow to select less position by comparing the max
    max = Math.max(nums[i] + i, max);
    //
    console.log("max", max, nums[i] + i);
  }

  return true;
}
