/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.80%)
 * Likes:    1012
 * Dislikes: 390
 * Total Accepted:    232.8K
 * Total Submissions: 806.2K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 *
 * Example:
 *
 *
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
/*
A range of prime
https://zh.wikipedia.org/wiki/%E5%9F%83%E6%8B%89%E6%89%98%E6%96%AF%E7%89%B9%E5%B0%BC%E7%AD%9B%E6%B3%95

A specific number is prime
https://zh.wikipedia.org/wiki/%E7%B4%A0%E6%80%A7%E6%B5%8B%E8%AF%95


remember 1 is not a prime by definition

for 10

2: 1
3: 1
4: 0
5: 1
6: 0
7: 1
8: 0
9: 0


*/
var countPrimes = function(n) {
  let markedNumbers = [],
    result = 0;
  for (let i = 2; i < n; i++) {
    if (markedNumbers[i] === undefined) {
      // is Primes
      markedNumbers[i] = 1;
      result++;
      // rm it's multiples,sieving
      let j = 2;
      while (i * j < n) {
        markedNumbers[i * j] = 0;
        j++;
      }
    }
  }
  console.log("flag array", markedNumbers);
  return result;
};
