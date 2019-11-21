/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 *
 * https://leetcode.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (31.52%)
 * Likes:    2100
 * Dislikes: 81
 * Total Accepted:    230.2K
 * Total Submissions: 730.2K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * You are given coins of different denominations and a total amount of money
 * amount. Write a function to compute the fewest number of coins that you need
 * to make up that amount. If that amount of money cannot be made up by any
 * combination of the coins, return -1.
 *
 * Example 1:
 *
 *
 * Input: coins = [1, 2, 5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 *
 * Example 2:
 *
 *
 * Input: coins = [2], amount = 3
 * Output: -1
 *
 *
 * Note:
 * You may assume that you have an infinite number of each kind of coin.
 *
 */
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  //same problem as make changes

  let nodeMinCoinByNodeValue = {};
  function makeChange(nodeValue) {
    if (nodeMinCoinByNodeValue[nodeValue]) {
      return nodeMinCoinByNodeValue[nodeValue];
    }
    if (nodeValue == 0) {
      return 0;
    }
    let nodeMinCoin;

    let hasAcceptableCoin = false;
    for (let coin of coins) {
      if (nodeValue - coin >= 0) {
        hasAcceptableCoin = true;
        let lowerCoin = makeChange(nodeValue - coin);
        if (lowerCoin != undefined) {
          if (nodeMinCoin === undefined || lowerCoin < nodeMinCoin) {
            nodeMinCoin = lowerCoin;
          }
        }
      }
    }
    if (!hasAcceptableCoin) {
      return undefined;
    }

    nodeMinCoinByNodeValue[nodeValue] = nodeMinCoin + 1;

    return nodeMinCoinByNodeValue[nodeValue];
  }

  let res = makeChange(amount);

  if (isNaN(res)) {
    return -1;
  } else {
    return res;
  }
};
