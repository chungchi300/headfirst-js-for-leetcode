/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 *
 * https://leetcode.com/problems/simplify-path/description/
 *
 * algorithms
 * Medium (29.42%)
 * Likes:    543
 * Dislikes: 1420
 * Total Accepted:    173.3K
 * Total Submissions: 573K
 * Testcase Example:  '"/home/"'
 *
 * Given an absolute path for a file (Unix-style), simplify it. Or in other
 * words, convert it to the canonical path.
 *
 * In a UNIX-style file system, a period . refers to the current directory.
 * Furthermore, a double period .. moves the directory up a level. For more
 * information, see: Absolute path vs relative path in Linux/Unix
 *
 * Note that the returned canonical path must always begin with a slash /, and
 * there must be only a single slash / between two directory names. The last
 * directory name (if it exists) must not end with a trailing /. Also, the
 * canonical path must be the shortest string representing the absolute
 * path.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: "/home/"
 * Output: "/home"
 * Explanation: Note that there is no trailing slash after the last directory
 * name.
 *
 *
 * Example 2:
 *
 *
 * Input: "/../"
 * Output: "/"
 * Explanation: Going one level up from the root directory is a no-op, as the
 * root level is the highest level you can go.
 *
 *
 * Example 3:
 *
 *
 * Input: "/home//foo/"
 * Output: "/home/foo"
 * Explanation: In the canonical path, multiple consecutive slashes are
 * replaced by a single one.
 *
 *
 * Example 4:
 *
 *
 * Input: "/a/./b/../../c/"
 * Output: "/c"
 *
 *
 * Example 5:
 *
 *
 * Input: "/a/../../b/../c//.//"
 * Output: "/c"
 *
 *
 * Example 6:
 *
 *
 * Input: "/a//b////c/d//././/.."
 * Output: "/a/b/c"
 *
 *
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  class MyStack {
    constructor() {
      this._storage = {};
      this.currentInsertionPosition = 0;
    }
    push(element) {
      console.log("pushing elemnet" + element);
      this._storage[this.currentInsertionPosition] = element;
      this.currentInsertionPosition++;
      // console.log(this._storage);
    }
    pop() {
      let element = this._storage[--this.currentInsertionPosition];
      console.log("poping elemnet" + element);
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
    length() {
      return this.currentInsertionPosition;
    }
  }
  let pathStack = new MyStack();
  let paths = path.split("/");
  // console.log(paths);
  for (let aPath of paths) {
    if (aPath == "..") {
      pathStack.pop(aPath);
    } else if (aPath === "" || aPath === ".") {
      continue;
    } else {
      pathStack.push(aPath);
    }
  }
  if (pathStack.peek() == "") {
    pathStack.pop();
  }

  let lengthOfStack = pathStack.length();
  let result = [];
  for (let i = 0; i < lengthOfStack; i++) {
    //reversing the order, the final result is still use the both
    result.push(pathStack.pop());
  }

  return "/" + result.reverse().join("/");
};
// @lc code=end
