/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  //data structure current and next
  //another case that remove element during loops
  let totalLength = 0;
  for (let i = nums.length; i--; ) {
    if (nums[i - 1] == nums[i]) {
      nums.splice(i - 1, 1);
    } else {
      totalLength++;
    }
  }
  return totalLength;
};
