/*
 * @lc app=leetcode id=219 lang=javascript
 *
 * [219] Contains Duplicate II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {
/*
    Position
        {   
            num:pos
        }
    */
// };

var containsNearbyDuplicate = function(nums, k) {
  //simply remove useless case
  if (nums.length <= 1 || k < 1) {
    return false;
  }

  /*
     Position
        {   
            num:pos
        }

        Really smart thing!
        remove k previous element for looking at specific domain 

  */
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    // console.log("nums", map);
    if (map[nums[i]]) {
      return true;
    } else {
      if (i - k >= 0) {
        map[nums[i - k]] = undefined;
        // console.log("reset previous value to undefined");
      }
      map[nums[i]] = true;
    }
  }
  return false;
};
