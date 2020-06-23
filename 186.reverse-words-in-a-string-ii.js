/*
 * @lc app=leetcode id=186 lang=javascript
 *
 * [186] Reverse Words in a String II
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-ii/description/
 *
 * algorithms
 * Medium (42.31%)
 * Likes:    431
 * Dislikes: 97
 * Total Accepted:    85.6K
 * Total Submissions: 200.3K
 * Testcase Example:  '["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]'
 *
 * Given an input string , reverse the string word by word.
 *
 * Example:
 *
 *
 * Input:  ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
 * Output: ["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
 *
 * Note:
 *
 *
 * A word is defined as a sequence of non-space characters.
 * The input string does not contain leading or trailing spaces.
 * The words are always separated by a single space.
 *
 *
 * Follow up: Could you do it in-place without allocating extra space?
 *
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
1,2,3,4
4,3,2,1

*/

function reverse(sArr, start, end) {
  while (start < end) {
    let temp = sArr[start];
    //skill learn, reverse an array, double reducing number
    sArr[start++] = sArr[end];
    sArr[end--] = temp;
  }
}
var reverseWords = function (sArr) {
  /*
        space complexity:O(1), in place
        time complexity:3n
    */
  /* 1. reverse entire chars    
    2. reverse words */

  reverse(sArr, 0, sArr.length - 1);
  let right = 0;
  while (right < sArr.length) {
    let left = right;
    while (right < sArr.length && sArr[right] != " ") {
      //loop to the empty space
      right++;
    }
    reverse(sArr, left, right - 1);
    right++;
  }
};
// @lc code=end
