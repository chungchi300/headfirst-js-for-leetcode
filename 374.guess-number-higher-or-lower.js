/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
//double open,left + 1 < right mutation of binary search
var guessNumber = function (n) {
  let start = 1;
  let end = n;
  while (start + 1 < end) {
    let midNumber = parseInt((end - start) / 2) + start;
    console.log("guessing", midNumber);
    if (guess(midNumber) == 0) {
      return midNumber;
    } else if (guess(midNumber) == 1) {
      start = midNumber;
    } else {
      end = midNumber;
    }
  }
  if (guess(start) == 0) return start;
  return end;
};
