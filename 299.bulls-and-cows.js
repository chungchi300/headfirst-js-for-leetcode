/*
 * @lc app=leetcode id=299 lang=javascript
 *
 * [299] Bulls and Cows
 */
/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

function getHint(secret, guess) {
  //one nested loop,store answer in map&counter

  var map = {};
  var A = 0;
  var B = 0;
  //this ten assumption is because there is only 1-9 possibility
  for (var i = 0; i < 10; i++) map[i] = 0;
  /*
getHint("12","21");
{0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}
{0: 0, 1: 1, 2: -1, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0}

every letter get neutralized
  */
  for (i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) A++;
    else {
      map[secret[i]]++;
      //order unimportance
      B += map[secret[i]] <= 0 ? 1 : 0;

      //order unimportance
      map[guess[i]]--;
      B += map[guess[i]] >= 0 ? 1 : 0;
    }
  }

  return A + 'A' + B + 'B';
}
