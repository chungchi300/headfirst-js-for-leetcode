/*
 * @lc app=leetcode id=128 lang=javascript
 *
 * [128] Longest Consecutive Sequence
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
# Easiest divide and conquer
1. sort( O(n log n) or O(n^2))
2. find the longest O(n)
## Disadv
very slow,don't fit the O(n) requirement

# Boundary method

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

for 100, find 101-99 fail, length =1
for 200, find 201-199 fail, length =1
for 4, find 5-0 fail, length =4

*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  var map = {};
  nums.forEach(function(num) {
    map[num] = 1;
  });
  var result = 0;
  //   console.log("before", { map });
  /*
    {
        100:1,
        4:1,
        200:1,
        1:1,
        3:1,
        2:1,
        

    }

  */
  /*
 for every number, expand the boundary if it can
 */
  nums.forEach(function(num) {
    var up = num + 1;
    while (map[up]) {
      delete map[up];
      up++;
    }
    var down = num - 1;
    while (map[down]) {
      delete map[down];
      down--;
    }
    // console.log({ up, down });
    result = Math.max(result, up - down - 1);
  });
  //   console.log("after", { map, result });

  /*
    {
        100:1,
        200,1
    }
  */
  return result;
};
