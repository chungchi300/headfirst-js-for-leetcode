/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 *
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
 *
 * algorithms
 * Easy (51.68%)
 * Likes:    1093
 * Dislikes: 1327
 * Total Accepted:    341.8K
 * Total Submissions: 652.6K
 * Testcase Example:  '[7,1,5,3,6,4]'
 *
 * Say you have an array for which the i^th element is the price of a given
 * stock on day i.
 *
 * Design an algorithm to find the maximum profit. You may complete as many
 * transactions as you like (i.e., buy one and sell one share of the stock
 * multiple times).
 *
 * Note: You may not engage in multiple transactions at the same time (i.e.,
 * you must sell the stock before you buy again).
 *
 * Example 1:
 *
 *
 * Input: [7,1,5,3,6,4]
 * Output: 7
 * Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit
 * = 5-1 = 4.
 * Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 =
 * 3.
 *
 *
 * Example 2:
 *
 *
 * Input: [1,2,3,4,5]
 * Output: 4
 * Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit
 * = 5-1 = 4.
 * Note that you cannot buy on day 1, buy on day 2 and sell them later, as you
 * are
 * engaging multiple transactions at the same time. You must sell before buying
 * again.
 *
 *
 * Example 3:
 *
 *
 * Input: [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transaction is done, i.e. max profit = 0.
 *
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length == 0) {
    return 0;
  }
  let diff = 0;

  /*
  'acc 7  | acc 1  |acc 5  |acc 3 |acc 6,next 4'
  next 1  | next 5 |next 3 |next 6|

  7,1,5,100,1,1 this kind of greedy work because 
  1. no transaction fee
  2. sell and buy can occur in same day
  3. Infinite of money at initial,about 1000


  */
  // []
  prices.reduce((acc, next) => {
    console.log("acc %s,next %s", acc, next);
    if (next > acc) {
      console.log("purchase %s , sell %s", acc, next);
      diff += next - acc;
    }
    return next;
  });

  return diff;
};
