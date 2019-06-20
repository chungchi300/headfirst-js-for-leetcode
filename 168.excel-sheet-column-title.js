/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */
/**
 * @param {number} n
 * @return {string}
 */

/*
Sub problem
Need to know how to calculate char from number
String.fromCharCode(65,66,67)=>A,B,C

hash mapping 
A  A   A
65 65  65=>but it has addition in final
1  1   1 => 3



*/
function getCharCodeFromNum(n) {
  if (n > 26) {
    throw Error("cannot bigger then 26");
  }
  return String.fromCharCode(n + 64);
}
var convertToTitle = function(n) {
  var ans = [];
  while (n) {
    if (n % 26 === 0) {
      ans.push(getCharCodeFromNum(26));
      n = n / 26 - 1;
    } else {
      // get the smallest first
      ans.push(getCharCodeFromNum(n % 26));
      //integer division
      //move one position
      n = ~~(n / 26);
    }
  }
  console.log("ans", ans);
  return ans.reverse().join("");
};
