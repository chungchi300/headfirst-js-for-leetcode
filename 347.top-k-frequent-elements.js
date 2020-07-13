/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (59.91%)
 * Likes:    3083
 * Dislikes: 213
 * Total Accepted:    391.9K
 * Total Submissions: 648.7K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 *
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 *
 * Note:
 *
 *
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * It's guaranteed that the answer is unique, in other words the set of the top
 * k frequent elements is unique.
 * You can return the answer in any order.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
Time complexity:O(2n)=>O(n)
*/
var topKFrequent = function (nums, k) {
  let occurrenceByNum = {};
  //O(n)
  for (let num of nums) {
    occurrenceByNum[num] = occurrenceByNum[num] ? occurrenceByNum[num] + 1 : 1;
  }
  //use quick sort, O(n) log n
  let sorted2DArray = Object.entries(occurrenceByNum).sort(
    (a, b) => b[1] - a[1]
  );
  //   console.log({ sortedArray: sorted2DArray });
  let res = [];
  //O (n)
  for (let i = 0; i < k; i++) {
    res.push(sorted2DArray[i][0]);
  }
  return res;
};
// @lc code=end
