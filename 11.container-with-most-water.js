/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (43.68%)
 * Total Accepted:    347.4K
 * Total Submissions: 795.2K
 * Testcase Example:  '[1,8,6,2,5,4,8,3,7]'
 *
 * Given n non-negative integers a1, a2, ..., an , where each represents a
 * point at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 *
 * Note: You may not slant the container and n is at least 2.
 *
 *
 *
 *
 *
 * The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In
 * this case, the max area of water (blue section) the container can contain is
 * 49.
 *
 *
 *
 * Example:
 *
 *
 * Input: [1,8,6,2,5,4,8,3,7]
 * Output: 49
 *
 */
/*
# Wrong idea of Divide and Conquer technique
1. find the max pair in the array
2. calculate the sum between them

e.g for
[1,8,8,5,1,4,8,3,5]
8,8 pair get sum 16 only
8,5 pair get sum 40

# n^2+xn method
get the n * n combination, multiply it

# Two pointer
start to end ,greedly and repeatly find max combination and get their sum.
better method the n*n combination to find max combination sum.

*/
/**
 * @param {number[]} height
 * @return {number}
 */
var getSum = function(heights, startPointer, endPointer) {
  return (
    Math.min(heights[startPointer], heights[endPointer]) *
    (endPointer - startPointer)
  );
};
var maxArea = function(heights) {
  let startPointer = 0,
    endPointer = heights.length - 1,
    water = 0;

  while (startPointer < endPointer) {
    water = Math.max(water, getSum(heights, startPointer, endPointer));

    if (heights[startPointer] < heights[endPointer]) {
      //end is bigger, move start will have more pro to find bigger
      startPointer++;
    } else if (heights[startPointer] > heights[endPointer]) {
      //vice versal
      endPointer--;
    } else if (heights[startPointer] == heights[endPointer]) {
      //both
      startPointer++;
      endPointer--;
    } else {
      throw Error("unreachable");
    }
  }

  return water;
};
