/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 *
 * https://leetcode.com/problems/longest-increasing-subsequence/description/
 *
 * algorithms
 * Medium (42.23%)
 * Likes:    4380
 * Dislikes: 103
 * Total Accepted:    359.3K
 * Total Submissions: 850K
 * Testcase Example:  '[10,9,2,5,3,7,101,18]'
 *
 * Given an unsorted array of integers, find the length of longest increasing
 * subsequence.
 *
 * Example:
 *
 *
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * Explanation: The longest increasing subsequence is [2,3,7,101], therefore
 * the length is 4.
 *
 * Note:
 *
 *
 * There may be more than one LIS combination, it is only necessary for you to
 * return the length.
 * Your algorithm should run in O(n^2) complexity.
 *
 *
 * Follow up: Could you improve it to O(n log n) time complexity?
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let tails = [];
  let size = 0;
  for (let num of nums) {
    let i = 0;
    j = size;
    while (i != j) {
      let mid = (i + j) / 2;
      if (tails[mid] < num) {
        i = mid + 1;
      } else {
        j = mid;
      }
    }
    tails[i] = num;
    if (i === size) {
      size++;
    }
  }
  return size;
};
// @lc code=end
