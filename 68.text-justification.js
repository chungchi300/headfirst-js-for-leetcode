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
class Row {
  constructor() {
    this.items = [];
    this.letters = 0;
  }
}
var greedyAssignWordsToRows = function(words, maxWidth) {
  let rows = [];
  //using array as object
  //[[letters:0]]
  let firstItem = new Row();
  rows[0] = firstItem;
  for (let word of words) {
    //using original row,res[0]
    let row = rows[rows.length - 1];
    //0&0 +0&4 > 16
    // console.log(row.items.length, row.letters, row.items.length);
    if (
      row.items.length &&
      row.letters + row.items.length + word.length > maxWidth
    ) {
      //   console.log("creating new row");
      rows.push(new Row());
      row = rows[rows.length - 1];
      row.letters = 0;
    }
    //adding the word
    row.items.push(word);
    //and then add the count
    row.letters += word.length;
  }
  //   console.log("res", rows);
  return rows;
};
var fullJustify = function(words, maxWidth) {
  const rows = greedyAssignWordsToRows(words, maxWidth);
  let res = [];
  for (let r = 0; r < rows.length; r++) {
    let row = rows[r];
    // console.log("row", row);
    if (row.items.length === 1 || r === rows.length - 1) {
      res[r] =
        row.items.join(" ") +
        " ".repeat(maxWidth - row.letters - row.items.length + 1);
      continue;
    }
    let line = row.items[0];
    let spaces = maxWidth - row.letters;
    let minSpaces = " ".repeat(Math.floor(spaces / (row.items.length - 1)));
    let addSpace = spaces % (row.items.length - 1);
    for (let w = 1; w < row.items.length; w++) {
      line += minSpaces + (w <= addSpace ? " " : "") + row.items[w];
    }
    res[r] = line;
  }
  //   console.log("the result", res);
  return res;
};
