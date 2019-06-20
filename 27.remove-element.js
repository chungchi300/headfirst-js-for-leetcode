/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/*
splice is functions has side effect,the returned val is an array that include the delete val

one of the challenging in this  question is looping and changing the length of the array

 */
var removeElement = function(nums, val) {
  let totalNumThatWithoutSpecificValInNums = 0;
  //executing times with the exact length
  for (var i = nums.length; i--; ) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    } else {
      totalNumThatWithoutSpecificValInNums++;
    }
  }
  return totalNumThatWithoutSpecificValInNums;
};
