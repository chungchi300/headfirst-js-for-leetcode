/*
 * @lc app=leetcode id=274 lang=javascript
 *
 * [274] H-Index
 */
/**
 * @param {number[]} citations
 * @return {number}
 */

/*
3 is the average of total citations



H-index 可用于评估研究人员的学术产出数量与学术产出水平

All papers has N number papers has been cited for N, 
his h-index is an

it means=>
1. More papers don't harm,
2. Only more papers that has specific cite help
3. if you has less paper and more cites, you should increase number of paper with written and cites.


[3,0,6,1,5]
[3,0,3,0,3]


 */
function hIndex(citations) {
  var paperNumByCitationNumber = {};
  var potentialHighest = citations.length;
  var i = 0;
  var max = 0;
  citations.map(
    c =>
      (paperNumByCitationNumber[c] = paperNumByCitationNumber[c]
        ? paperNumByCitationNumber[c] + 1
        : 1)
  );
  // console.log("map %o", paperNumByCitationNumber);
  /*
paperNumByCitationNumber = {

  0:1,
  1:1,
  3:1,
  5:1
  6:1,

}
*/

  /*
normally it will loop through entire map,
but if that i has exact paperNumber,
the loop will reduced loop number by  exact paperNumber





*/
  for (; i <= potentialHighest; i++) {
    max = Math.max(max, potentialHighest >= i ? i : 0);

    let deductionOfHighest = paperNumByCitationNumber[i]
      ? paperNumByCitationNumber[i]
      : 0;

    // console.log(
    //   "max %s, current %s with exact occurrence %s ,and the highest occurrence %s , deduction of highest %s",
    //   max,
    //   i,
    //   paperNumByCitationNumber[i],
    //   potentialHighest,
    //   deductionOfHighest
    // );
    potentialHighest = potentialHighest - deductionOfHighest;
  }
  return max;
}
