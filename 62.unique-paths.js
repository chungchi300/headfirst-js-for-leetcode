/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  //sub optimal structure
  let cacheByMN = {};
  function recursive(currentM, currentN, m, n) {
    let key = `${currentM}-${currentN}`;
    if (cacheByMN[key]) {
      return cacheByMN[key];
    }
    /* base case start*/
    // console.log("base case", { currentM, currentN, m, n });
    if (currentM > m) {
      return 0;
    }
    if (currentN > n) {
      return 0;
    }
    if (m == currentM && n == currentN) {
      return 1;
    }

    /* base case end */
    // console.log("non reach base case", { currentM, currentN, m, n });

    cacheByMN[key] =
      recursive(currentM + 1, currentN, m, n) +
      recursive(currentM, currentN + 1, m, n);
    return cacheByMN[key];
  }
  return recursive(1, 1, m, n);
};
