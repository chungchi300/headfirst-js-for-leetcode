/*
Simulator

e.g.
Initially dividend = 100, d = 7, q = 1, res = 0
=> 100, 14, 2, 0
=> 100, 28, 4, 0
=> 100, 56, 8, 0
=> 100, 112, 16, 0 (recursion stops here and comes back)

100, 56, 8, 0 => 44(100-56), 56, 8, 8
44, 28, 4, 8 => 16(44-28), 28, 4, 12
16, 14, 2, 12 => 2(16-14), 14, 2, 14
2, 7, 1, 14 (end)

And answer is 14

*/

function divide(dividend, divisor) {
  if (dividend === -2147483648 && divisor === -1) {
    return 2147483647;
  }
  var isNeg = (dividend > 0) ^ (divisor > 0);
  var res = 0;

  dividend = Math.abs(dividend);
  subtract(Math.abs(divisor), 1);

  function subtract(d, q) {
    if (dividend > d) {
      subtract(d + d, q + q);
    }
    if (dividend >= d) {
      dividend -= d;
      res += q;
    }
  }

  return isNeg ? -res : res;
}
