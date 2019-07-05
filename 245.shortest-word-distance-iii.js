/*
 * @lc app=leetcode id=245 lang=javascript
 *
 * [245] Shortest Word Distance III
 */
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var sameWordDistance = function(words, word1) {
  var lastIndex;
  var distance = Infinity;

  // Search every word
  for (var i = 0; i < words.length; i++) {
    // word1 found
    if (words[i] === word1) {
      // If lastIndex exists, compare minimum distances
      if (lastIndex !== undefined) {
        distance = Math.min(distance, Math.abs(lastIndex - i));
      }

      // Update lastIndex
      lastIndex = i;
    }
  }

  return distance;
};
var shortestWordDistance = function(words, word1, word2) {
  //one pass, one index, time: O(N), space:O(1)

  if (word1 === word2) {
    return sameWordDistance(words, word1);
  }

  var potentialWordIndex = -1,
    ans = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < words.length; i++) {
    if (words[i] === word1 || words[i] === word2) {
      if (potentialWordIndex !== -1 && words[potentialWordIndex] !== words[i]) {
        //finding the another word0
        ans = Math.min(i - potentialWordIndex, ans);
      }
      potentialWordIndex = i;
    }
  }
  return ans;
};
