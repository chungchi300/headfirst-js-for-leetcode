/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let res = [],
    resMap = {};
  //caching + recursion, so called dynamic programming
  function fn(row, col) {
    // i：行数，j：列数

    let r;
    // end condition, the
    //the first element||the last element
    if (col == 0 || row == col) {
      r = 1;
    } else {
      //no internal logic there in order to get equivalent smaller problem
      //upper row, same col - 1+col, row -1
      r =
        (resMap[`${row - 1},${col}`] || fn(row - 1, col)) +
        (resMap[`${row - 1},${col - 1}`] || fn(row - 1, col - 1));
    }

    resMap[`${row},${col}`] = r; // 使用对象把值存起来，就不用计算多次了，类似斐波那契数列
    return r;
  }

  for (let i = 0; i < numRows; i++) {
    let a = [];
    //calculate any row can use recursive function
    for (let j = 0; j <= i; j++) a.push(fn(i, j));
    res.push(a);
  }
  return res;
};
