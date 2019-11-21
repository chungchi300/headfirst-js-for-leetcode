/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.stack = [];
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  let len = this.stack.length;
  for (let i = 1; i < len; i++) {
    let n = this.stack.shift();

    this.stack.push(n);
  }
  //1,3,5,7 => 7,3,5,1, then 7 it the top,O(N)

  return this.stack.shift();
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  let len = this.stack.length - 1;
  return this.stack[len];
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length < 1;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
