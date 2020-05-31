/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (33.13%)
 * Likes:    694
 * Dislikes: 405
 * Total Accepted:    189.9K
 * Total Submissions: 559.1K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, /. Each operand may be an integer or another
 * expression.
 *
 * Note:
 *
 *
 * Division between two integers should truncate toward zero.
 * The given RPN expression is always valid. That means the expression would
 * always evaluate to a result and there won't be any divide by zero
 * operation.
 *
 *
 * Example 1:
 *
 *
 * Input: ["2", "1", "+", "3", "*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 *
 * Example 2:
 *
 *
 * Input: ["4", "13", "5", "/", "+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 *
 * Example 3:
 *
 *
 * Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * Output: 22
 * Explanation:
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} tokens
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

const evaluate = (x, y, op) => {
  switch (op) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return (x / y) | 0; // Math.trunc()
  }
};
var evalRPN = function(tokens) {
  let numberStack = new MyStack();

  for (let token of tokens) {
    if (isNaN(token)) {
      const [y, x] = [numberStack.pop(), numberStack.pop()];

      numberStack.push(evaluate(x, y, token));
    } else {
      numberStack.push(parseFloat(token));
    }
    // console.log({ numberStack });
  }
  return numberStack.pop();
};
