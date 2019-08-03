/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 */
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
/*
The data structure is intervals
and the main problem here is interval overlaps.
I will use the previous code to sort the array first,
and then once overlap, return false;

*/
var canAttendMeetings = function(intervals) {
  //sort it
  //it makes
  /*
        [0,30],[6,20],[8,10],[1,5],[2,6]
        to 
        [0,30],[1,5],[2,6],[6,20],[8,10]

        */
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  /*
    after sorting ,it is very easy to determine overlapping by
    comparing  previous interval last element and current interval first element  difference,
    if it is bigger then zero, it overlap
    

    */
  //   console.log({ intervals });
  var prev = [-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER];

  for (var curr of intervals) {
    // console.log({ curr: curr[0], prev: prev[1] });
    if (curr[0] < prev[1]) {
      return false;
    } else {
      prev = curr;
    }
  }
  return true;
};
