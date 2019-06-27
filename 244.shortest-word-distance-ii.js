/*
 * @lc app=leetcode id=244 lang=javascript
 *
 * [244] Shortest Word Distance II
 */
/**
 * @param {string[]} words
 */
var WordDistance = function(words) {
  this.list = {};
  for (var i = 0; i < words.length; i++) {
    if (!this.list[words[i]]) {
      this.list[words[i]] = [];
    }
    this.list[words[i]].push(i);
  }
  console.log(this.list);
};

WordDistance.prototype.shortest = function(word1, word2) {
  var distance = Infinity;
  for (var i = 0; i < this.list[word1].length; i++) {
    for (var j = 0; j < this.list[word2].length; j++) {
      distance = Math.min(
        distance,
        Math.abs(this.list[word1][i] - this.list[word2][j])
      );
    }
  }
  console.log("distance %s for %s - %s", distance, word1, word2);
  return distance;
};
/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
