/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
# Recall

Remember how we detect cycle in linked list?

fast move 2 in once
slow move 1 in once
their abs difference will be -1 in once cycle

[1,3,4,2,2]


This is a problem that using linked list without explicit create related cycle

# 
 */
var findDuplicate = function(nums) {
  let slow = nums[0],
    fast = nums[nums[0]];
  //{ slow: 1, fast: 3 }
  console.log({ slow, fast });
  //here fast moves two steps at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }
  //{ slow: 4, fast: 4 }
  console.log({ slow, fast });
  //reset
  fast = 0;

  //here fast move one step at a time
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  //{ slow: 2, fast: 2 }
  console.log({ slow, fast });
  return slow;
};
