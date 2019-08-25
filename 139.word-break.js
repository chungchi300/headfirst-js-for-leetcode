var wordBreak = function(s, wordDict) {
  if (!wordDict || wordDict.length == 0) return false;
  var dp = new Array(s.length + 1);
  dp.fill(false);
  dp[0] = true;

  for (var i = 1; i <= s.length; i++) {
    //use the j as maximum reaching steps,it is accumulative to get the result
    for (var j = 0; j < i; j++) {
      //relook up the string
      let lookingStr = s.substring(j, i);
      //use the dynamic programming dp[j] to move to specific step

      if (dp[j] && wordDict.indexOf(lookingStr) >= 0) {
        console.log({ lookingStr });
        dp[i] = true;
        break;
      }
    }
  }
  //dp is an array with the length character
  console.log({ dp });
  return dp[s.length];
};
