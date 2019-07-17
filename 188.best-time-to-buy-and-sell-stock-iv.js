/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
/*
Need to study Dynamic programing

*/
var maxProfit = function(k, prices) {
  if (prices.length === 0 || !prices) return 0;

  if (k >= prices.length / 2) return quickSolve(prices);

  let globalVal = new Array(k + 1).fill(0);
  let local = new Array(k + 1).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    let diff = prices[i + 1] - prices[i];
    for (let j = k; j >= 1; j--) {
      local[j] = Math.max(
        globalVal[j - 1] + (diff > 0 ? diff : 0),
        local[j] + diff
      );
      globalVal[j] = Math.max(local[j], globalVal[j]);
    }
  }
  return globalVal[k];
};

function quickSolve(prices) {
  let len = prices.length,
    profit = 0;
  for (let i = 1; i < len; i++)
    // as long as there is a price gap, we gain a profit.
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  return profit;
}
