/*
 * @lc app=leetcode id=243 lang=javascript
 *
 * [243] Shortest Word Distance
 */
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

/*

["practice", "makes", "perfect", "coding", "makes"].
know more question
1. words can be duplicates, "makes " exist twice
2. no moving to the top at the end 
*/

var shortestDistance = function(words, word1, word2) {
  //one pass, one index, time: O(N), space:O(1)
  var potentialWordIndex = -1,
    ans = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (potentialWordIndex !== -1 && words[potentialWordIndex] !== words[i]) {
        //finding the another word
        ans = Math.min(i - potentialWordIndex, ans);
      }
      potentialWordIndex = i;
    }
  }
  return ans;
};
