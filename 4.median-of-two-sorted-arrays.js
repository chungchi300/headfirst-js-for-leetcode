/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (25.98%)
 * Total Accepted:    412.6K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity
 * should be O(log (m+n)).
 *
 * You may assume nums1 and nums2 cannot be both empty.
 *
 * Example 1:
 *
 *
 * nums1 = [1, 3]
 * nums2 = [2]
 *
 * The median is 2.0
 *
 *
 * Example 2:
 *
 *
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 *
 * The median is (2 + 3)/2 = 2.5
 *
 *
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*

n log (n)

Unknown:Median of two sorted array
Divide and conquer: 
1. Combine two sorted array to one - yes
2. Median of  one sorted array(is Odd or event)

*/
function combineTwoSortedArray(nums1, nums2) {
  //should have more efficient method
  var s = nums1.concat(nums2);
  s.sort(function(a, b) {
    return a - b;
  });
  return s;
}
function isOdd(num) {
  return num & 1;
}
function integerDivision(num) {
  return ~~(num / 2);
}
function medianOfSortedArray(s) {
  var len = s.length;
  if (isOdd(len)) {
    //the 6th number with index 5 for total 11 elements
    return s[integerDivision(len)];
  } else {
    let secondMedianIndex = integerDivision(len);
    return (s[secondMedianIndex - 1] + s[secondMedianIndex]) / 2;
  }
}
var findMedianSortedArrays = function(nums1, nums2) {
  let s = combineTwoSortedArray(nums1, nums2);
  return medianOfSortedArray(s);
};

/*
 log(n) 
 Unknown:Median of two sorted array
Divide and conquer: 
1. Combine two sorted array to one - yes
2. Median of sorted array(is Odd or event)


*/
// var findMedianSortedArrays = function(nums1, nums2) {
//   var m = nums1.length;
//   var n = nums2.length;
//   var total = m + n;
//   var half = integerDivision(total);

//   if (isOdd(total)) return findKth(nums1, m, nums2, n, half + 1);
//   else
//     return (
//       (findKth(nums1, m, nums2, n, half) +
//         findKth(nums1, m, nums2, n, half + 1)) /
//       2
//     );
// };

// function findKth(a, m, b, n, k) {
//   // always assume that m is equal or smaller than n
//   if (m > n) return findKth(b, n, a, m, k);
//   if (m === 0) return b[k - 1];
//   if (k === 1) return Math.min(a[0], b[0]);

//   // divide k into two parts
//   var pa = Math.min(k >> 1, m),
//     pb = k - pa;

//   if (a[pa - 1] < b[pb - 1]) return findKth(a.slice(pa), m - pa, b, n, k - pa);
//   else if (a[pa - 1] > b[pb - 1])
//     return findKth(a, m, b.slice(pb), n - pb, k - pb);
//   else return a[pa - 1];
// }
