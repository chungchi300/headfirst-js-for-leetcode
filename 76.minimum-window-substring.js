/*
Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

BANC includes ABC 
ADOBECODEBANC includes ABC
thats why we find min
*/
/*
Sliding Window


https://www.jishuwen.com/d/2Epc/zh-tw


*/
function minWindow(s, t) {
  var ans = "";

  // 1. process hashmap
  var charCountByChar = {};
  t.split("").forEach(
    ch => (charCountByChar[ch] = (charCountByChar[ch] || 0) + 1)
  );
  var count = Object.keys(charCountByChar).length;
  console.log("map", charCountByChar);
  /*
    A:1,B:1,C:1
  */
  // 2. traverse s to find boundaries
  // both l & r are inclusive
  var l = 0;
  var r = -1;

  while (r < s.length) {
    if (count === 0) {
      // good condition
      // l~r contains t

      // update ans
      if (!ans || r - l + 1 < ans.length) {
        ans = s.slice(l, r + 1);
      }

      // get rid of curr ch and then move l
      if (charCountByChar[s[l]] !== undefined) {
        charCountByChar[s[l]]++;
      }
      if (charCountByChar[s[l]] > 0) {
        count++;
      }
      l++;
    } else {
      // bad condition
      // l~r doesn't contain t

      // move r and add new ch
      r++;
      if (charCountByChar[s[r]] !== undefined) {
        charCountByChar[s[r]]--;
      }
      if (charCountByChar[s[r]] === 0) {
        count--;
      }
    }
  }
  return ans;
}
