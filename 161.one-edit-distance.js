/*
 * @lc app=leetcode id=161 lang=javascript
 *
 * [161] One Edit Distance
 *
 * https://leetcode.com/problems/one-edit-distance/description/
 *
 * algorithms
 * Medium (32.18%)
 * Likes:    610
 * Dislikes: 111
 * Total Accepted:    107.9K
 * Total Submissions: 334.5K
 * Testcase Example:  '"ab"\n"acb"'
 *
 * Given two strings s and t, determine if they are both one edit distance
 * apart.
 *
 * Note:
 *
 * There are 3 possiblities to satisify one edit distance apart:
 *
 *
 * Insert a character into s to get t
 * Delete a character from s to get t
 * Replace a character of s to get t
 *
 *
 * Example 1:
 *
 *
 * Input: s = "ab", t = "acb"
 * Output: true
 * Explanation: We can insert 'c' into s to get t.
 *
 *
 * Example 2:
 *
 *
 * Input: s = "cab", t = "ad"
 * Output: false
 * Explanation: We cannot get t from s by only one step.
 *
 * Example 3:
 *
 *
 * Input: s = "1203", t = "1213"
 * Output: true
 * Explanation: We can replace '0' with '1' to get t.
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
//just cover the 3 scenario
abc


 */
var isOneEditDistance = function (s, t) {
  const longer = s.length > t.length ? s : t;
  const shorter = s.length > t.length ? t : s;

  if (longer.length - shorter.length > 1) {
    return false;
  }

  let count = 0,
    i = 0,
    j = 0;
  //one cover 3 sample case, pretty smart
  while (i < longer.length) {
    if (longer[i] !== shorter[j]) {
      //add one letter that is doesn't match
      count++;

      if (longer.length > shorter.length) {
        i++;
        continue;
      }
    }

    i++;
    j++;
  }

  return count === 1;
};
