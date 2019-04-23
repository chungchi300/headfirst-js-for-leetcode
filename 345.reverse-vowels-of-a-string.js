/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (41.17%)
 * Total Accepted:    150.4K
 * Total Submissions: 364.9K
 * Testcase Example:  '"hello"'
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 *
 * Example 1:
 *
 *
 * Input: "hello"
 * Output: "holle"
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "leetcode"
 * Output: "leotcede"
 *
 *
 * Note:
 * The vowels does not include the letter "y".
 *
 *
 *
 */
/**
 * @param {string} s
 * @return {string}
 */
const vowelString = "aeiouAEIOU";
function getVowelArr(len, arr) {
  var vowelArr = [];

  for (var i = 0; i < len; i++) {
    if (vowelString.includes(arr[i])) {
      vowelArr.push(arr[i]);
    }
  }
  return vowelArr;
}
var reverseVowels = function(s) {
  var arr = s.split(""),
    len = arr.length;
  //first in last out
  let vowelStack = getVowelArr(len, arr);

  var ansStr = "";
  for (var i = 0; i < len; i++) {
    if (vowelString.includes(arr[i])) {
      ansStr += vowelStack.pop();
    } else {
      ansStr += arr[i];
    }
  }

  return ansStr;
};
