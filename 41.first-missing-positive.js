/*
 * @lc app=leetcode id=41 lang=javascript
 *
 * [41] First Missing Positive
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/** zero is not positive here */
/**
 *  Find the first missing positive integer.
 *  A: nums = []; // nums.length=0; return 1;
 *  B: nums = [-1, -2, -3, -4]; // after sort, nums = [-4, -3, -2, -1], nums[nums.length-1]=-1<0; return 1;
 *  C: nums = [1, 2, 4]; // return 3;
 *  D: nums = [1, 2, 3]; // return 4;
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
//very good divide and conquer
var firstMissingPositive = function(nums) {
  nums = nums.sort(function(val1, val2) {
    return val1 > val2 ? 1 : val1 < val2 ? -1 : 0;
  });
  if (nums.length === 0 || nums[nums.length - 1] <= 0) {
    return 1;
  } // A, B
  for (var i = 0, supposeNumber = 1; i < nums.length; ++i) {
    // C
    if (nums[i] > supposeNumber) {
      return supposeNumber;
    }
    if (nums[i] < supposeNumber) {
      console.log("not adding", supposeNumber, nums[i]);
    } else {
      /* not adding every time because avoid 
      
      E1:[-1,1,3,4], negative number
      E2:[1,1,1,3,4], successive same number
      */
      supposeNumber = supposeNumber + 1;
    }
  }
  return nums[nums.length - 1] + 1; // D
};
