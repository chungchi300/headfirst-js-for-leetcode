/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 *
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (35.61%)
 * Likes:    3336
 * Dislikes: 144
 * Total Accepted:    492.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 *
 * Example 1:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 8
 * Output: [3,4]
 *
 * Example 2:
 *
 *
 * Input: nums = [5,7,7,8,8,10], target = 6
 * Output: [-1,-1]
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function findFirst(nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  let result = -1;
  while (lowIndex <= highIndex) {
    let midIndex = parseInt((lowIndex + highIndex) / 2);
    let midVal = nums[midIndex];
    if (midVal == target) {
      console.log("first index");
      result = midIndex;
      highIndex = midIndex - 1;
    } else if (midVal > target) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return result;
}

function findLast(nums, target) {
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  let result = -1;
  while (lowIndex <= highIndex) {
    let midIndex = parseInt((lowIndex + highIndex) / 2);
    let midVal = nums[midIndex];
    if (midVal == target) {
      console.log("last index");
      result = midIndex;
      lowIndex = midIndex + 1;
    } else if (midVal > target) {
      highIndex = midIndex - 1;
    } else {
      lowIndex = midIndex + 1;
    }
  }
  return result;
}

var searchRange = function (nums, target) {
  //divide and conquer
  if (nums == null || nums.length == 0) return [-1, -1];
  let first = findFirst(nums, target);

  if (first == -1) return [-1, -1];
  let last = findLast(nums, target);
  return [first, last];
};
// @lc code=end
