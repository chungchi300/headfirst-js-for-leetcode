/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 *
 * https://leetcode.com/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (37.03%)
 * Total Accepted:    196.7K
 * Total Submissions: 530.6K
 * Testcase Example:  '"egg"\n"add"'
 *
 * Given two strings s and t, determine if they are isomorphic.
 *
 * Two strings are isomorphic if the characters in s can be replaced to get t.
 *
 * All occurrences of a character must be replaced with another character while
 * preserving the order of characters. No two characters may map to the same
 * character but a character may map to itself.
 *
 * Example 1:
 *
 *
 * Input: s = "egg", t = "add"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "foo", t = "bar"
 * Output: false
 *
 * Example 3:
 *
 *
 * Input: s = "paper", t = "title"
 * Output: true
 *
 * Note:
 * You may assume both s and t have the same length.
 *
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  //check non isomorphic is potentially faster
  //remember the order is also keep

  if (s.length !== t.length) return false;

  var len = s.length,
    hash = {},
    _hash = {};

  for (var i = 0; i < len; i++) {
    var a = s[i],
      b = t[i];
    //if completely new, add the mapping
    if (!hash[a] && !_hash[b]) {
      hash[a] = b;
      _hash[b] = a;
      //if for character in str occur second time and doesn't match , return false
    } else if (hash[a] !== b || _hash[b] !== a) {
      console.log("false the hash", hash, _hash);
      return false;
    }
  }
  console.log("true the hash", hash, _hash);
  return true;
};
