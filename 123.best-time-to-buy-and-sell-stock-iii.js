/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/*
Number        : [3,3,5,0,0,3,1,4]
Max Difference: [0,0,2,2,2,3,3,4]
Lowest value: 0
Profit from verse
profit 0 profit 3 profit 1 profit 4 profit 4  profit -1  profit 2  profit 2
*/
var maxProfit = function(prices) {
  var len = prices.length;
  if (len <= 1) return 0;
  var maxDiffPerPosition = [];
  maxDiffPerPosition.push(0);
  var lowest = prices[0];
  for (var i = 1; i < len; i++) {
    lowest = Math.min(prices[i], lowest);
    maxDiffPerPosition[i] = Math.max(
      maxDiffPerPosition[i - 1],
      prices[i] - lowest
    );
  }
  console.log("lowest %s , maxSoFar %o", lowest, maxDiffPerPosition);
  var ret = 0;
  var lastElement = prices[len - 1];
  var profit = 0;
  for (i = len - 1; i >= 0; i--) {
    profit = lastElement - prices[i];
    console.log("profit %s", profit);
    lastElement = Math.max(prices[i], lastElement);
    ret = Math.max(ret, maxDiffPerPosition[i] + profit);
  }
  return ret;
};
