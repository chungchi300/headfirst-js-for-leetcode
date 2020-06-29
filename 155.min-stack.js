/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 *
 * https://leetcode.com/problems/min-stack/description/
 *
 * algorithms
 * Easy (38.37%)
 * Likes:    2141
 * Dislikes: 231
 * Total Accepted:    353.5K
 * Total Submissions: 907.2K
 * Testcase Example:  '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]'
 *
 * Design a stack that supports push, pop, top, and retrieving the minimum
 * element in constant time.
 *
 *
 * push(x) -- Push element x onto stack.
 * pop() -- Removes the element on top of the stack.
 * top() -- Get the top element.
 * getMin() -- Retrieve the minimum element in the stack.
 *
 *
 *
 *
 * Example:
 *
 *
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin();   --> Returns -3.
 * minStack.pop();
 * minStack.top();      --> Returns 0.
 * minStack.getMin();   --> Returns -2.
 *
 *
 * one storage for normal stack
 * one storage for min stack that minimal always on top
 *
 * stack:    -2 0 -3
 * minStack: -2 -3
 * stupidMinStackWhichStoreEachStepMin: -2 -2 -3
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.normalStack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.normalStack.push(x);
  if (
    this.minStack.length === 0 ||
    x <= this.minStack[this.minStack.length - 1]
  ) {
    console.log("pushing to minstack", x, this.minStack);
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let top = this.top();
  this.normalStack.pop();
  if (top === this.minStack[this.minStack.length - 1]) {
    console.log("poping from min stack");
    this.minStack.pop();
  }
  return top;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.normalStack[this.normalStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  //O(N) == =1
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// /*
// Simple memory space solution

// // @lc code=start
// /**
//  * initialize your data structure here.
//  */
// var MinStack = function() {
//   this.normalStack = [];
//   this.minStack = [];
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//   this.normalStack.push(x);
//   // if (
//   //   this.minStack.length === 0 ||
//   //   x <= this.minStack[this.minStack.length - 1]
//   // ) {
//   // console.log("pushing to minstack", x, this.minStack);
//   let elementToPush;
//   if (this.minStack.length === 0) {
//     elementToPush = x;
//   } else {
//     elementToPush = Math.min(x, this.minStack[this.minStack.length - 1]);
//   }

//   this.minStack.push(elementToPush);
//   // }
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//   let element = this.normalStack.pop();

//   this.minStack.pop();

//   return element;
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.normalStack[this.normalStack.length - 1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   return this.minStack[this.normalStack.length - 1];
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(x)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */
// // @lc code=end
