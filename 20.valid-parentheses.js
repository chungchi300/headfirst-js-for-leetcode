/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (38.50%)
 * Likes:    4947
 * Dislikes: 216
 * Total Accepted:    1M
 * Total Submissions: 2.6M
 * Testcase Example:  '"()"'
 *
 * Given a string containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 * Note that an empty string is also considered valid.
 *
 * Example 1:
 *
 *
 * Input: "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: "{[]}"
 * Output: true
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
//parenthese
var isValid = function (s) {
  let chars = s.split("");
  let stack = [];

  for (let char of chars) {
    //really smart to direct input what it want
    if (char == "(") {
      stack.push(")");
    } else if (char == "[") {
      stack.push("]");
    } else if (char == "{") {
      stack.push("}");
      //start using counter element
    } else {
      console.log({ stack });
      if (stack.length == 0 || stack.pop() != char) {
        return false;
      }
    }
  }
  //still have uncancelled element
  if (stack.length) {
    return false;
  }
  return true;
};
// @lc code=end
