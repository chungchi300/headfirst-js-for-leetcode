/*
 * @lc app=leetcode id=316 lang=javascript
 *
 * [316] Remove Duplicate Letters
 */
/**
 * @param {string} s
 * @return {string}
 */
/*
Given a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.

Example 1:

Input: "bcabc"
Output: "abc"
Example 2:

Input: "cbacdcbc"
Output: "acdb"


*/

/*
 The hardest part is smallest possible hexical order
String.fromCharCode(97);=>a
*/
function getTheSmallestChar(s) {
  var str = "";
  var char = new Array(26).fill(-1);
  var headChar = "z";
  var startI = 0;
  for (let i = s.length - 1; i > -1; i--) {
    const element = s[i];
    if (char[element.charCodeAt() - 97] < 0) {
      char[element.charCodeAt() - 97] = i;
      headChar = element;
      startI = i;
      str += element;
    } else {
      if (headChar >= element) {
        headChar = element;
        startI = i;
      }
    }
  }
  return { startI, headChar, str, char };
}
var removeDuplicateLetters = function(s) {
  if (s.length <= 1) {
    return s;
  }
  let { startI, headChar, str, char } = getTheSmallestChar(s);
  var finalStr = headChar;
  while (str.length > finalStr.length) {
    char.fill(-1);
    for (let i = s.length - 1; i > startI; i--) {
      const element = s[i];
      if (finalStr.indexOf(element) < 0) {
        if (char[element.charCodeAt() - 97] < 0) {
          char[element.charCodeAt() - 97] = i;
          headChar = element;
          var startI2 = i;
        } else {
          if (headChar >= element) {
            headChar = element;
            var startI2 = i;
          }
        }
      }
    }
    startI = startI2;
    finalStr += headChar;
  }
  return finalStr;
};
