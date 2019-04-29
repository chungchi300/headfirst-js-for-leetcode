/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumberIncludingEmptyStr = function(str) {
  return Number(str) === 0 || !!Number(str);
};
var isNumber = function(str) {
  //remove the possibility of empty string
  return isNumberIncludingEmptyStr(str) && str.trim() !== "";
};
