var maximumGap = function(nums) {
  //special case handling
  if (nums === null || nums.length < 2) return 0;
  //special case handling
  if (nums.length == 2)
    return nums[0] > nums[1] ? nums[0] - nums[1] : nums[1] - nums[0];
  //sort and get the maximum calculate
  nums.sort(function(a, b) {
    return a - b;
  });
  var tmp = nums[1] - nums[0],
    max = tmp;
  for (var x = 1; x < nums.length; x++) {
    tmp = nums[x] - nums[x - 1];
    max = Math.max(max, tmp);
  }
  return max;
};
