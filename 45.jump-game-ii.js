/*
 * @lc app=leetcode id=45 lang=javascript
 *
 * [45] Jump Game II
 *
 * https://leetcode.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (27.92%)
 * Likes:    1246
 * Dislikes: 68
 * Total Accepted:    176.7K
 * Total Submissions: 624.1K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * Given an array of non-negative integers, you are initially positioned at the
 * first index of the array.
 *
 * Each element in the array represents your maximum jump length at that
 * position.
 *
 * Your goal is to reach the last index in the minimum number of jumps.
 *
 * Example:
 *
 *
 * Input: [2,3,1,1,4]
 * Output: 2
 * Explanation: The minimum number of jumps to reach the last index is 2.
 * ⁠   Jump 1 step from index 0 to 1, then 3 steps to the last index.
 *
 * Note:
 *
 * You can assume that you can always reach the last index.
 *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/*
[0,1,2,3,4]
[2,3,1,1,4]
[y,y,y,y,y]
[2,4,4,4,8]-important

2->allow you select the maximum value


value based notes
1. 2->3  
2. 3->4
 */

//can always reach
var jump = function(nums) {
  var step = 0,
    n = nums.length,
    i = 0,
    cur = 0;
  while (cur < n - 1) {
    step++;
    var pre = cur;
    console.log("pre", pre, cur);
    for (; i <= pre; i++) {
      //jump for the maximum in can in the rest
      cur = Math.max(cur, i + nums[i]);
    }
    if (pre === cur) return -1;
  }
  return step;
};
