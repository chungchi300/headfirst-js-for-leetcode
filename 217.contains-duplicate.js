/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  /*
    
    {
        key:true(once exist,return true)
    
    }
    */

  let existenceByVal = {};
  for (let num of nums) {
    if (existenceByVal[num]) {
      return true;
    } else {
      existenceByVal[num] = true;
    }
  }
  return false;
};

//Array index
