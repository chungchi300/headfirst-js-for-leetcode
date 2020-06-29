/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 *
 * https://leetcode.com/problems/number-of-1-bits/description/
 *
 * algorithms
 * Easy (48.30%)
 * Likes:    825
 * Dislikes: 512
 * Total Accepted:    353K
 * Total Submissions: 721.3K
 * Testcase Example:  '00000000000000000000000000001011'
 *
 * Write a function that takes an unsigned integer and return the number of '1'
 * bits it has (also known as the Hamming weight).
 *
 *
 *
 * Example 1:
 *
 *
 * Input: 00000000000000000000000000001011
 * Output: 3
 * Explanation: The input binary string 00000000000000000000000000001011 has a
 * total of three '1' bits.
 *
 *
 * Example 2:
 *
 *
 * Input: 00000000000000000000000010000000
 * Output: 1
 * Explanation: The input binary string 00000000000000000000000010000000 has a
 * total of one '1' bit.
 *
 *
 * Example 3:
 *
 *
 * Input: 11111111111111111111111111111101
 * Output: 31
 * Explanation: The input binary string 11111111111111111111111111111101 has a
 * total of thirty one '1' bits.
 *
 *
 *
 * Note:
 *
 *
 * Note that in some languages such as Java, there is no unsigned integer type.
 * In this case, the input will be given as signed integer type and should not
 * affect your implementation, as the internal binary representation of the
 * integer is the same whether it is signed or unsigned.
 * In Java, the compiler represents the signed integers using 2's complement
 * notation. Therefore, in Example 3 above the input represents the signed
 * integer -3.
 *
 *
 *
 *
 * Follow up:
 *
 * If this function is called many times, how would you optimize it?
 *
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
//simplest
var hammingWeight = function (n) {
  console.log({ n, binary: n.toString(2) });
  let weight = 0;
  let binaryN = n.toString(2);
  for (let i = 0; i < binaryN.length; i++) {
    // console.log({ weight, binaryChar: binaryN.charAt(i) });
    if (binaryN.charAt(i) == "1") {
      weight++;
    }
  }
  return weight;
};
// not yet know
// var hammingWeight = function (n) {
//   let sum = 0;

//   while (n != 0) {
//     sum += n & 1;
//     n = n >>> 1;
//   }

//   return sum;
// };
// @lc code=end
