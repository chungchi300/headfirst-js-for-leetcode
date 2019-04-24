/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 *
 * https://leetcode.com/problems/word-pattern/description/
 *
 * algorithms
 * Easy (34.80%)
 * Total Accepted:    136.8K
 * Total Submissions: 393.1K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * Given a pattern and a string str, find if str follows the same pattern.
 *
 * Here follow means a full match, such that there is a bijection between a
 * letter in pattern and a non-empty word in str.
 *
 * Example 1:
 *
 *
 * Input: pattern = "abba", str = "dog cat cat dog"
 * Output: true
 *
 * Example 2:
 *
 *
 * Input:pattern = "abba", str = "dog cat cat fish"
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: pattern = "aaaa", str = "dog cat cat dog"
 * Output: false
 *
 * Example 4:
 *
 *
 * Input: pattern = "abba", str = "dog dog dog dog"
 * Output: false
 *
 * Notes:
 * You may assume pattern contains only lowercase letters, and str contains
 * lowercase letters that may be separated by a single space.
 *
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  /*
    similar question with isomorphic strings
    */
  /* data structure for valid
    "abba", str = "dog cat cat dog"
        patternHash={
            a:dog,
            b:cat
        }
        stringHash={
            dog:a,
            cat:b
        }

    */
  /* data structure for invalid
    "abba", str = "dog cat cat dog"
        patternHash={
            a:dog,
        }
        stringHash={
            dog:a,
            cat:b
        }
    */
  const patternCharArr = pattern.split("");
  const strWords = str.split(" ");

  if (strWords.length != patternCharArr.length) {
    return false;
  }
  const length = strWords.length;
  let patternHash = {};
  let wordHash = {};
  for (let i = 0; i < length; i++) {
    const word = strWords[i];
    const patternChar = patternCharArr[i];
    if (patternHash[word] == undefined && wordHash[patternChar] == undefined) {
      patternHash[word] = patternChar;
      wordHash[patternChar] = word;
    } else if (
      patternHash[word] !== patternChar ||
      wordHash[patternChar] !== word
    ) {
      return false;
    }
  }
  return true;
};
