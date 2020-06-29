/**
 * @param {number[]} nums
 * @return {number}
 */
function calculateCurrentDPPointMaxPrice(currentPosition, dp, nums) {
  for (let j = 0; j < currentPosition; j++) {
    if (nums[currentPosition] > nums[j]) {
      // console.log("dp [i]", dp[i], i, j);
      //offer a position for it to increase by one
      dp[currentPosition] = Math.max(dp[currentPosition], 1 + dp[j]);
    }
  }
}
var lengthOfLIS = function (nums) {
  if (!nums || nums.length == 0) {
    return 0;
  }
  if (nums.length == 1) {
    return 1;
  }
  /*
  this is a bottom up dp, you can call it bottom up tabulation
  in each element in dp, it record the the maximum increasing  
  subsequence



  10 9 2 5 3 7 101 18
  1  1 1 2 2 3 4   4


  问题缩小为，到i 这一段的最长增序列的长度是多少-> very smart
  */
  // create an array with size nums and fill the array with 1
  let dp = new Array(nums.length).fill(1);

  let result = 1;
  //iterate all elements
  for (let i = 1; i < nums.length; i++) {
    calculateCurrentDPPointMaxPrice(i, dp, nums);
    //get the max
    result = Math.max(result, dp[i]);
  }
  // console.log({ result, dp });
  return result;
};
