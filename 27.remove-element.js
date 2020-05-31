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
https://coderwall.com/p/prvrnw/remove-items-from-array-while-iterating-over-it


O(n for looping the entire arr)
* O(n) for removing 1 elements, causing  elements after deleted element to moves to left
 */
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
https://coderwall.com/p/prvrnw/remove-items-from-array-while-iterating-over-it


O(n for looping the entire arr)
* O(n) for removing 1 elements, causing  elements after deleted element to moves to left
 */
var removeElement = function (nums, val) {
  /* pure o(N) */
  if (nums == null || nums.length == 0) {
    return 0;
  }
  let newLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[newLength++] = nums[i];
    }
  }

  return newLength;
};

//for 3,2,2,3, it returns 2, but remember the nums is 2,2,2,3, that why if you want to further splice it with length, if you want to get the removed element
