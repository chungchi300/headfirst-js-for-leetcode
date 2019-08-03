/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/*
solution determine cell next state
1. getNeighborsSum(position,arr){

}

2. cellNextRoundState(position,arr){
    
    if(getNeighborsSum(position,arr)<2){
        return 0;
    }
}

*/
// var checkNeighbors = function(row, col){
//   };

var getNeighborsSum = function(row, col, board) {
  var score = -board[row][col];
  var r, c;
  for (r = row - 1; r <= row + 1; r++) {
    for (c = col - 1; c <= col + 1; c++) {
      if (
        typeof board[r] !== "undefined" &&
        typeof board[r][c] !== "undefined"
      ) {
        score += Math.abs(Math.floor(board[r][c]));
      }
    }
  }
  return score;
};

// var getNextState = function(row, col, board) {
//   let neighborsSum = getNeighborsSum(row, col, board);
//   let currentLive = board[row][col];
//   if (currentLive) {
//     if (neighborsSum < 2) {
//       return 0;
//     }
//     if (neighborsSum == 2 || neighborsSum == 3) {
//       //   console.log("sum", neighborsSum);
//       return 1;
//     }
//     if (neighborsSum > 3) {
//       return 0;
//     }
//   } else {
//     if (neighborsSum == 3) {
//       return 1;
//     }
//     return 0;
//   }
// };
//in place solution
//https://leetcode.com/problems/game-of-life/discuss/73312
var gameOfLife = function(board) {
  //the in place is a concept I still need time to study
  var r, c;
  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      var score = getNeighborsSum(r, c, board);
      if (board[r][c] === 1) {
        /*
          skip the case that alive => alive
          the skip is on that position, change to a flag that is going to change by 0.5, 
          it keep immutable when it read by specific method(getting the score)
          and allow it to write specific value by changing(floor)

          In theory, you can do it by

[0,1,0],[0,0,1],[1,1,1],[0,0,0]
[{old:0,new:0} ... to continue]
//0.5 is just a data structure that save memory but tricky to read
        */
        if (score < 2 || score > 3) {
          board[r][c] = -0.5;
        }
      } else if (board[r][c] === 0) {
        if (score === 3) {
          board[r][c] = 0.5;
        }
      }
    }
  }

  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board[0].length; c++) {
      board[r][c] = Math.ceil(board[r][c]);
    }
  }
  // if (board.length == 0) {
  //   return board;
  // }
  // //create new board
  // let switchingBoard = [];
  // for (let rowIndex in board) {
  //   switchingBoard[rowIndex] = switchingBoard[rowIndex] || [];
  //   for (let colIndex in board[rowIndex]) {
  //     //it updated  cell one by cell one so it cause bug
  //     switchingBoard[rowIndex][colIndex] = getNextState(
  //       rowIndex,
  //       colIndex,
  //       board
  //     );
  //   }
  // }
  // for (let rowIndex in switchingBoard) {
  //   for (let colIndex in switchingBoard[rowIndex]) {
  //     //it updated  cell one by cell one so it cause bug
  //     board[rowIndex][colIndex] = switchingBoard[rowIndex][colIndex];
  //   }
  // }

  // return board;
};
