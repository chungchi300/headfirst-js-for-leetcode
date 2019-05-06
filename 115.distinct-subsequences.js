/*
Involves dynamic programming

var numDistinct = function(S, T) {
    if (S.length < T.length || T.length === 0 || S.length === 0) return 0;
    else if (S == T) return 1;
    else {
        var zero = Array.apply(null, new Array(S.length)).map(Number.prototype.valueOf,0);
        var previous = zero.slice();
        var current  = zero.slice();
        for (var i=0; i < T.length; i++) {
            var sum = 0;
            for (var j=0; j < S.length; j++) {
                if (T[i] === S[j]) {
                    current[j] = (i === 0 ? 1: sum);
                }
                sum += previous[j];
            }
            previous = current.slice();
            current  = zero.slice();
        }
        return previous.reduce(function(a,b) {return a+b});
    }
};

*/
var numDistinct = function(S, T) {
  if (S.length < T.length || T.length === 0 || S.length === 0) return 0;
  else if (S == T) return 1;
  else {
    var zero = Array.apply(null, new Array(S.length)).map(
      Number.prototype.valueOf,
      0
    );
    var previous = zero.slice();
    var current = zero.slice();
    for (var i = 0; i < T.length; i++) {
      var sum = 0;
      for (var j = 0; j < S.length; j++) {
        if (T[i] === S[j]) {
          current[j] = i === 0 ? 1 : sum;
        }
        sum += previous[j];
      }
      previous = current.slice();
      current = zero.slice();
    }
    return previous.reduce(function(a, b) {
      return a + b;
    });
  }
};
