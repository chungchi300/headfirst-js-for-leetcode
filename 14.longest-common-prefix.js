/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.27%)
 * Total Accepted:    442.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 * Example 1:
 *
 *
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 * Note:
 *
 * All given inputs are in lowercase letters a-z.
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return "";
  let commonPrefix = ""; //for effective data structure for the arr
  let shortest = Math.min(...strs.map(str => str.length), Number.MAX_VALUE);

  // var shortest = strs.reduce(function(pre, item) {
  //   return Math.min(pre, item.length);
  // }, Number.MAX_VALUE);

  let strsArr = strs.map(str => str.split(""));
  // console.log("strsArr", strsArr, shortest);
  for (let i = 0; i < shortest; i++) {
    let currentCharacter = strsArr[0][i];
    if (strsArr.every(arr => arr[i] === currentCharacter)) {
      commonPrefix += currentCharacter;
    } else {
      //one character no longer the same.
      break;
    }
  }
  return commonPrefix;
};
