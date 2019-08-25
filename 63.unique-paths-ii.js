/*
 * @lc app=leetcode id=63 lang=javascript
 *
 * [63] Unique Paths II
 */
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// dynamic programming with recursive
// function arraysEqual(a, b) {
//   return JSON.stringify(a) == JSON.stringify(b);
// }
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   let cacheByMN = {};
//   if (obstacleGrid.length == 1 && obstacleGrid[0][0] == 1) {
//     // console.log("skipping base");
//     return 0;
//   }
//   function recursive(currentM, currentN, m, n) {
//     let key = `${currentM}-${currentN}`;
//     if (cacheByMN[key]) {
//       //   console.log("finding in cache");
//       return cacheByMN[key];
//     }
//     /* base case start*/
//     // console.log("base case", { currentM, currentN, m, n });
//     if (currentM > m) {
//       return 0;
//     }
//     if (currentN > n) {
//       return 0;
//     }
//     if (obstacleGrid[currentM - 1][currentN - 1]) {
//       return 0;
//     }
//     if (m == currentM && n == currentN) {
//       return 1;
//     }

//     /* base case end */
//     // console.log("non reach base case", { currentM, currentN, m, n });

//     cacheByMN[key] =
//       recursive(currentM + 1, currentN, m, n) +
//       recursive(currentM, currentN + 1, m, n);
//     return cacheByMN[key];
//   }
//   return recursive(1, 1, obstacleGrid.length, obstacleGrid[0].length);
// };

/*
 * @lc app=leetcode id=62 lang=javascript
 *
 * [62] Unique Paths
 */
//dynamic programming without recursion
function isPassableEmptyCell(i, j, mtrx) {
  return mtrx[i][j] !== 1;
}
var uniquePathsWithObstacles = function(obstacleGrid) {
  let mtrx = obstacleGrid;
  //i & j as an cache key, you totally can create new table to store the result & recalculation, allocate in same table just for reduce memory usage
  //first row & first col is 1 is easy to understand
  //middle row is the upper + lefter because they can only go right and bottom, cannot go back to left
  //always remember that dynamic programming is brute force
  for (let i = 0; i < mtrx.length; i++) {
    for (let j = 0; j < mtrx[0].length; j++) {
      // console.log({ i, j });
      //start position
      if (!i && !j) {
        // console.log("i&j = 0");
        //mutation of the matrix when all out of boundary
        //if empty,means passable
        isPassableEmptyCell(i, j, mtrx) ? (mtrx[i][j] = 1) : (mtrx[i][j] = 0);
        //first row
      } else if (!j) {
        // console.log("j = 0");
        isPassableEmptyCell(i, j, mtrx)
          ? (mtrx[i][j] = mtrx[i - 1][j])
          : (mtrx[i][j] = 0);
        //first column
      } else if (!i) {
        // console.log("i = 0");
        isPassableEmptyCell(i, j, mtrx)
          ? (mtrx[i][j] = mtrx[i][j - 1])
          : (mtrx[i][j] = 0);
        //middle position
      } else {
        // console.log("i&j>1");
        isPassableEmptyCell(i, j, mtrx)
          ? (mtrx[i][j] = mtrx[i - 1][j] + mtrx[i][j - 1])
          : (mtrx[i][j] = 0);

        //current position is addition of upper  one and left one cell addition
      }
    }
  }
  /*
  [[0,0,0],[0,1,0],[0,0,0]]
  [[ 1, 1, 1 ], [ 1, 0, 1 ], [ 1, 1, 2 ]]
  //the last one(bottom right most) will store the result
  //the cell become the the possible paths to there
  */
  console.log({ finalMtrx: mtrx });
  return mtrx[mtrx.length - 1][mtrx[0].length - 1];
};
