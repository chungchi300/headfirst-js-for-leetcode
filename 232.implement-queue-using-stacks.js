/**
 * Time: O(1) - amortized for pop/peek
 * Space: O(n)
 * n - # of elements
 */

/**
 * Initialize your data structure here.
 */
function MyQueue() {
  this.reverse = [];
  this.original = [];
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.original.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (!this.reverse.length) {
    while (this.original.length) {
      // move back to front in order to reverse the order
      this.reverse.push(this.original.pop());
    }
  }
  return this.reverse.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (!this.reverse.length) {
    while (this.original.length) {
      // move back to front in order to reverse the order
      this.reverse.push(this.original.pop());
    }
  }
  return this.reverse[this.reverse.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return !this.reverse.length && !this.original.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = Object.create(MyQueue).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
