/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.22%)
 * Total Accepted:    258.4K
 * Total Submissions: 802.2K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 *
 * If the last word does not exist, return 0.
 *
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 *
 * Example:
 *
 * Input: "Hello World"
 * Output: 5
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWordSlowDueToManipulateWholeStringInSplitEmpty = function(s) {
  s = s.trim();
  let words = s.split(" ");
  console.log("words", words);
  if (words.length == 0) {
    return 0;
  }
  return words.slice(-1)[0].length;
};
var lengthOfLastWord = function(s) {
  /**
   *
   * from the last character, when see empty space, it means it is last words
   */

  var _str = s.replace(/\s/g, "");
  if (!_str.length) return 0;
  s = s.trim();
  for (var i = s.length; i--; ) {
    if (s[i] === " ") return s.length - i - 1;
    /* for "a" */
    if (i === 0) return s.length - i;
  }
};
