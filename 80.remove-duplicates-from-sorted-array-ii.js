/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/*

[1,1,1,2,2,3]=>[1,1,2,2,3]

remove duplicate that have more then 2
*/

var removeDuplicates = function(nums) {
  if (nums.length === 0) {
    return;
  }
  let cursorIndex = 1;

  //set as the first number
  let currentNumber = nums[0];
  let duplicateCount = 1;
  while (nums[cursorIndex] !== undefined) {
    if (currentNumber === nums[cursorIndex]) {
      duplicateCount++;
    } else {
      //reset to new number
      currentNumber = nums[cursorIndex];
      duplicateCount = 1;
    }
    if (duplicateCount > 2) {
      nums.splice(cursorIndex, 1);
    } else {
      cursorIndex++;
    }
  }

  console.log("current count", duplicateCount);
};
