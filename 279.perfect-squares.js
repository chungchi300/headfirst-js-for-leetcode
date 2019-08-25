function numSquares(n) {
  // General strategy is to build up a memoization array with the smallest amount of squares needed to make the number at each index
  // since the only square in the beginning is 1, until we see 4, it's very boring:
  // to make 1, we use 1, to make 2 we use two 1's, to make 3, we use three 1's
  // mem[1] = 1, d[2] = 2, mem[3] = 3
  // initially, mem[4] will also use 1s and end up at 4
  // but now we can consider 2^2 too since the inner loop now allows it
  // we then compare, is what we have calculated so far better? or using this new square?
  // To answer that, we subtract the current square (4) from i (4) and look up in our mem lookup to see how many steps that took
  // mem[0] is zero of course, so we end up with Math.min(4, 0 + 1). The 2nd is less of course, so we set mem[4] to 1

  // Our memory lookup. Others often name this 'dp'
  let mem = [0];
  let i, j;

  // Outer loop, where we build up till we reach n
  //calculate each step
  for (i = 1; i <= n; i++) {
    // Initially, we have no idea how many steps it will take
    mem[i] = Infinity;

    // Now loop over all squares that are smaller or equal to the current i.
    //for every step, calculating or look up
    for (j = 1; j * j <= i; j++) {
      // The smallest amount of squares is either what we already have, or what we can build with a new square and remainder
      //let say 4 is not existed, 4 - 2*2 +1 = mem[4] == 1
      mem[i] = Math.min(mem[i], mem[i - j * j] + 1);
    }
  }
  //[0,1,2,3,4,5,6,7,8,9,10,11,12]
  //[0,1,2,3,1,2,3,4,2,1,2,3,3]
  //[0,1,[1,1],[1,1,1],[4],[4,1]]
  console.log({ mem, memLength: mem.length });
  return mem[n];
}
