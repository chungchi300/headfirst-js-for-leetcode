/*
 * @lc app=leetcode id=277 lang=javascript
 *
 * [277] Find the Celebrity
 */
/**
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */

/*

The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

*/
function knowOther(person, total, knows) {
  for (let i = 0; i < total; i++) {
    if (person != i && knows(person, i)) {
      return true;
    }
  }
  return false;
}
function allOthersKnowHim(person, total, knows) {
  for (let i = 0; i < total; i++) {
    if (person != i && !knows(i, person)) {
      return false;
    }
  }
  return true;
}
var solution = function(knows) {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  /*
I thinks knows implementation utilize 
 grapth first from n
*/

  return function(n) {
    // for each person, check whether he knows any other&&  other know him

    for (let i = 0; i < n; i++) {
      if (!knowOther(i, n, knows) && allOthersKnowHim(i, n, knows)) {
        return i;
      }
    }
    return -1;
  };
};
