function merge(intervals) {
  if (!intervals.length) return intervals;

  /*
[[1,3],[2,6],[8,10],[15,18]]
a       b 
0,1     0,1   


the sort make
[asc,asc]

3,2 >1 , overlap
6-8<1 , non overlap


  */
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));

  console.log(intervals);
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}
