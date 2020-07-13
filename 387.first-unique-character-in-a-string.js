/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.67%)
 * Total Accepted:    253.3K
 * Total Submissions: 509.6K
 * Testcase Example:  '"leetcode"'
 *
 *
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 *
 * Examples:
 * //l is first non-repeat
 * s = "leetcode"
 * return 0.
 * //v is first non-repeat
 * s = "loveleetcode",
 * return 2.
 * must traverse hole word
 *
 *
 *
 * Note: You may assume the string contain only lowercase letters.
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
/*
  Sol 1:(not greedy enough)
  {
      character:firstIndex
  }
  , if it is already existed when adding, remove the character,


  if final has empty map, return -1, 
  else return the smallest index


  Sol 2:
  for each character, find the last index from reverse, if it is searched, remove it

  var firstUniqChar = function (s) {
  //O(N^2)
  let repeatingCharacterByCharacter = {};
  for (let i = 0; i < s.length; i++) {
    let character = s[i];
    if (
      !repeatingCharacterByCharacter[character] &&
      s.indexOf(character) == s.lastIndexOf(character)
    ) {
      return i;
    } else {
      repeatingCharacterByCharacter[character] = true;
    }
  }
  return -1;
};

*/
//More stable, O(2n)=>O(n)
var firstUniqChar = function (s) {
  let occurenceByCharKey = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    occurenceByCharKey[s.charAt(i).charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  // console.log({ occurenceByCharKey });
  for (let i = 0; i < s.length; i++) {
    let theChar = s.charAt(i);
    // console.log({ s, i, theChar });
    if (occurenceByCharKey[theChar.charCodeAt(0) - "a".charCodeAt(0)] == 1) {
      return i;
    }
  }
  return -1;
};
