/*
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

BANC includes ABC 
ADOBECODEBANC includes ABC
thats why finding min is worth doing
*/
/*
Sliding Window

http://www.tastones.com/zh-tw/stackoverflow/algorithm/sliding-window-algorithm/sliding_window_algorithm_basic_information/


After the study material, we can divide two problem

1. The Window size
2. Adjusting the window

*/

function getCountTByChar(t) {
  var countTByChar = {};
  t.split("").forEach(ch => (countTByChar[ch] = (countTByChar[ch] || 0) + 1));

  return countTByChar;
}

function minWindow(s, t) {
  var ans = "";

  // 1. process hashmap
  var countTByChar = getCountTByChar(t);

  var count = Object.keys(countTByChar).length;

  /*
    A:1,B:1,C:1


    count=3
  */
  // 2. traverse s to find boundaries
  // both l & r are inclusive
  var l = 0;
  var r = -1;

  while (r < s.length) {
    console.log(s.slice(l, r));
    // count = 0 indicate good condition,l~r contains t
    if (count === 0) {
      // update ans, when ans is null, directly assign, and when new ans is shorter, use the new one
      if (!ans || r - l + 1 < ans.length) {
        ans = s.slice(l, r + 1);
      }

      // get rid of curr ch and then move l, and adding one because it's going to find it again
      if (countTByChar[s[l]] !== undefined) {
        countTByChar[s[l]]++;
      }
      if (countTByChar[s[l]] > 0) {
        count++;
      }
      l++;
    } else {
      // bad condition
      // l~r doesn't contain t

      // move r and add new ch
      r++;
      //S is a string that allows getting char by indexing.
      //e.g ADOBECODEBANC [0] = "A"
      //A:1,B:1,C:1 will eventually become
      //A:0,B:0,C:0 , and r become to includes ADOBEC
      if (countTByChar[s[r]] !== undefined) {
        countTByChar[s[r]]--;
      }
      if (countTByChar[s[r]] === 0) {
        count--;
      }
    }
  }
  return ans;
}
