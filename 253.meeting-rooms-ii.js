/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
function Interval(start, end) {
  this.start = start;
  this.end = end;
}
var minMeetingRooms = function(intervals) {
  intervals = intervals.map(interval => new Interval(interval[0], interval[1]));
  var intervalsOrderByStart = intervals.concat().sort(function(a, b) {
    return a.start - b.start;
  });
  var intervalsOrderByEnd = intervals.sort(function(a, b) {
    return a.end - b.end;
  });
  console.log({ starts: intervalsOrderByStart, ends: intervalsOrderByEnd });
  var rooms = 0;
  var end = 0;
  /*
intervalsOrderByStart [[0,30],[5,10],[15,20]]
intervalsOrderByEnd   [[5,10],[15,20],[0,30]]

[0,30]  [5,10], 10>0,true  room = 1
[5,10],[5,10] ,10>5,true  room =2
[15,20],[5,10], 10>15,false  room = 2

smart but why it works
because the maximum < intervals.length,
our problem is for each element, find the most properly item that overlap, 
if overlap, we add it by one

*/

  for (var i = 0; i < intervals.length; i++) {
    if (intervalsOrderByStart[i].start < intervalsOrderByEnd[end].end) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
};
