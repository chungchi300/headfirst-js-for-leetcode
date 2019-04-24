/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 *
 * https://leetcode.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (46.01%)
 * Total Accepted:    321.1K
 * Total Submissions: 697.9K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * Given an array of strings, group anagrams together.
 *
 * Example:
 *
 *
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 *
 * Note:
 *
 *
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 *
 *
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
/*  data structure */
/*
    ans is 2d array
    hash is for finding proper index to append new item to one of the array in 2d by using the unique key of anagram(the sorted key)

*/
var groupAnagrams = function(strs) {
  var ans = [];
  var hash = {};

  strs.forEach(function(item) {
    var str = item
      .split("")
      .sort()
      .join("");
    //str is the the same for all anagram
    if (hash[str] === undefined) {
      //mapping the index
      hash[str] = ans.length;
      //first item
      ans.push([item]);
    } else {
      //second item
      ans[hash[str]].push(item);
    }
  });

  return ans;
};
