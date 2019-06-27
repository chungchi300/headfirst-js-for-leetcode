/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*


gas=[numberOfGasWillGotAtThisStation]
cost=[numberOfGasForLeavingThisStationAndGoToNextStation]


*/

/*
Potential solution, trial and error for by loop. n^n
If totalCost is greater than gas available then return -1
If not, we know there's guaranteed solution so just go through and return start
https://leetcode.com/problems/gas-station/discuss/276561/Super-Simple-JavaScript-solution-(with-comments)
*/

var canCompleteCircuit = function(gas, cost) {
  let sGas = gas.reduce((sum, item) => sum + item, 0);
  let sCst = cost.reduce((sum, item) => sum + item, 0);
  //expr = return stmt
  //because it must be an close back cirlcle, so it must be bigger

  if (sGas < sCst) return -1;

  let len = gas.length,
    gasGainByDeductionOfCost = 0,
    loc = 0;

  /*
  Honestly very simple data structure, the procedure must have do some tricks
   guaranteed to be unique & Circle solution
  that's why finding the first leave can win+freedom to choice first position

  problem space n

  */
  for (let i = 0; i < len; i++) {
    gasGainByDeductionOfCost += gas[i] - cost[i];
    if (gasGainByDeductionOfCost < 0) {
      //failure reset
      gasGainByDeductionOfCost = 0;
      loc = i + 1;
      console.log(i, loc, gasGainByDeductionOfCost);
    }
  }
  return loc;
};
