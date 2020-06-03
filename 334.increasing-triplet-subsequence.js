/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/*
O(1) space complexity. that is the hard part
1,5,4,5,6

no need to be successive

1,100,7,100,9
*/

var increasingTriplet = function (nums) {
  let min = Number.MAX_VALUE;
  let secondMin = Number.MAX_VALUE;
  for (let num of nums) {
    //the first min act as last indexed sorted element, then do the search in the rest element
    if (num <= min) {
      min = num;
    } else if (num < secondMin) {
      secondMin = num;
    } else if (num > secondMin) {
      return true;
    }
  }
  return false;
};
// var increasingTriplet = function(nums) {
//   let increasingTime = 0;
//   let prev = -1;
//   for (let num of nums) {
//     if (num > prev) {
//       increasingTime++;
//       if (increasingTime == 3) {
//         return true;
//       }
//     } else {
//       increasingTime = 1;
//     }
//     prev = num;
//   }
//   return false;
// };
