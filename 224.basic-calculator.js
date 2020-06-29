/*
 * @lc app=leetcode id=224 lang=javascript
 *
 * [224] Basic Calculator
 *
 * https://leetcode.com/problems/basic-calculator/description/
 *
 * algorithms
 * Hard (33.68%)
 * Likes:    1011
 * Dislikes: 107
 * Total Accepted:    131.1K
 * Total Submissions: 377.8K
 * Testcase Example:  '"1 + 1"'
 *
 * Implement a basic calculator to evaluate a simple expression string.
 *
 * The expression string may contain open ( and closing parentheses ), the plus
 * + or minus sign -, non-negative integers and empty spaces  .
 *
 * Example 1:
 *
 *
 * Input: "1 + 1"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: " 2-1 + 2 "
 * Output: 3
 *
 * Example 3:
 *
 *
 * Input: "(1+(4+5+2)-3)+(6+8)"
 * Output: 23
 * Note:
 *
 *
 * You may assume that the given expression is always valid.
 * Do not use the eval built-in library function.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
class MyStack {
  constructor() {
    this._storage = {};
    this.currentInsertionPosition = 0;
  }
  push(element) {
    this._storage[this.currentInsertionPosition] = element;
    this.currentInsertionPosition++;
    // console.log(this._storage);
  }
  pop() {
    let element = this._storage[--this.currentInsertionPosition];
    delete this._storage[this.currentInsertionPosition];
    if (this.currentInsertionPosition < 0) {
      this.currentInsertionPosition = 0;
    }
    // console.log(this._storage);
    return element;
  }
  peek() {
    return this._storage[this.currentInsertionPosition - 1];
  }
}
function isDigit(c) {
  //dd

  return c >= "0" && c <= "9";
}
var calculate = function (s) {
  let stack = new MyStack();
  let sign = 1;
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let currentChar = s.charAt(i);
    //abstract the number
    if (isDigit(currentChar)) {
      let num = currentChar - "0";
      while (i + 1 < s.length && isDigit(s.charAt(i + 1))) {
        num = num * 10 + s.charAt(i + 1) - "0";
        i++;
      }
      res += num * sign;
    } else if (currentChar == "+") {
      sign = 1;
    } else if (currentChar == "-") {
      sign = -1;
    } else if (currentChar == "(") {
      stack.push(res);
      stack.push(sign);
      res = 0;
      sign = 1;
    } else if (currentChar == ")") {
      res = res * stack.pop() + stack.pop();
    }
  }
  return res;
};
// @lc code=end
