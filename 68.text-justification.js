/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
/*

This is an example of text justification
*/
var greedyAssignWordsToRows = function(words, maxWidth) {
  const rows = [[]];
  //using array as object
  //[[letters:0]]
  rows[0].letters = 0;
  for (let word of words) {
    //using original row,res[0]
    let row = rows[rows.length - 1];
    //0&0 +0&4 > 16
    if (row.length && row.letters + row.length + word.length > maxWidth) {
      rows.push([]);
      row = rows[rows.length - 1];
      row.letters = 0;
    }
    //adding the word
    row.push(word);
    //and then add the count
    row.letters += word.length;
  }
  console.log("res", rows);
  return rows;
};
var fullJustify = function(words, maxWidth) {
  const rows = greedyAssignWordsToRows(words, maxWidth);
  let res = [];
  for (let r = 0; r < rows.length; r++) {
    let row = rows[r];
    if (row.length === 1 || r === rows.length - 1) {
      res[r] =
        row.join(" ") + " ".repeat(maxWidth - row.letters - row.length + 1);
      continue;
    }
    let line = row[0];
    let spaces = maxWidth - row.letters;
    let minSpaces = " ".repeat(Math.floor(spaces / (row.length - 1)));
    let addSpace = spaces % (row.length - 1);
    for (let w = 1; w < row.length; w++) {
      line += minSpaces + (w <= addSpace ? " " : "") + row[w];
    }
    res[r] = line;
  }
  return res;
};
