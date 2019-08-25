/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  //sub optimal structure
  //dynamic programming
  let cacheByN = {};
  //brute force first
  function recursive(n) {
    if (cacheByN[n]) {
      return cacheByN[n];
    }
    if (n < 0) {
      return 0;
    }

    if (n == 0) {
      return 1;
    } else {
      cacheByN[n] = recursive(n - 1) + recursive(n - 2);
      return cacheByN[n];
    }
  }
  return recursive(n);
};
