/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.73%)
 * Total Accepted:    325.8K
 * Total Submissions: 629.8K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 *
 * Example 1:
 *
 *
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "rat", t = "car"
 * Output: false
 *
 *
 * Note:
 * You may assume the string contains only lowercase alphabets.
 *
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  /* anagram means words contains similar thing but different order */
  /*
    slow due to sorting,
    hashMap with weight is best, and doing the deduction
  */
  if (s.length != t.length) {
    return false;
  }
  const length = s.length;
  let sCountMap = {};
  const sChars = s.split("");
  const tChars = t.split("");
  for (let i = 0; i < length; i++) {
    let char = sChars[i];
    if (sCountMap[char]) {
      sCountMap[char] = sCountMap[char] + 1;
    } else {
      sCountMap[char] = 1;
    }
  }
  for (let i = 0; i < length; i++) {
    let char = tChars[i];
    if (sCountMap[char]) {
      sCountMap[char] = sCountMap[char] - 1;
      if (sCountMap[char] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};
