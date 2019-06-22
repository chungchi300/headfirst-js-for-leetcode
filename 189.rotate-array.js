/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     for(let i=0;i<k;i++){
//         let last = nums.pop()
//         nums.unshift(last)
//     }
// };

var rotate = function(nums, k) {
  nums.unshift(...nums.splice(nums.length - k));
  return nums;
};
