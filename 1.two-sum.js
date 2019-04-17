/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (43.26%)
 * Total Accepted:    1.7M
 * Total Submissions: 3.9M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * Example:
 *
 *
 * Given nums = [2, 7, 11, 15], target = 9,
 *
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
    Data structure
    {
        remainderVal:unMatchedItemIndex
    }
    Example
    {
        7:0
    }

    when it is 7 found,it directly export

    Two sum is about using the map to search things fast using map(like remainder)
*/

var twoSum = function(nums, target) {
  let unMatchedIndexByRemainderVal = {};
  for (let [i, item] of nums.entries()) {
    //!= undefined in case unMatchedIndexByRemainderVal[item] is getting position 0
    if (unMatchedIndexByRemainderVal[item] != undefined) {
      return [unMatchedIndexByRemainderVal[item], i];
    } else {
      unMatchedIndexByRemainderVal[target - item] = i;
    }
  }

  throw Error("Not found");
};
/* using less in memory */
/*
  [undefined,undefined,undefined,undefined,undefined,undefined,0]
  store remainderVal at index, and the unMatchedItemIndex

  javascript array with specific index is much faster then object hashed map
*/
/*
var twoSum = function(nums, target) {
    var a = [];
    for (var i = 0, len = nums.length; i < len; i++) {
      var tmp = target - nums[i];
      if (a[tmp] !== undefined) return [a[tmp], i];
      a[nums[i]] = i;
    }
  };
  */
