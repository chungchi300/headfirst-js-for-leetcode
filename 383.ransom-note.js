/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 *
 * https://leetcode.com/problems/ransom-note/description/
 *
 * algorithms
 * Easy (49.55%)
 * Total Accepted:    107.8K
 * Total Submissions: 217.5K
 * Testcase Example:  '"a"\n"b"'
 *
 *
 * Given an arbitrary ransom note string and another string containing letters
 * from all the magazines, write a function that will return true if the
 * ransom
 * note can be constructed from the magazines ; otherwise, it will return
 * false.
 *
 *
 * Each letter in the magazine string can only be used once in your ransom
 * note.
 *
 *
 * Note:
 * You may assume that both strings contain only lowercase letters.
 *
 *
 *
 * canConstruct("a", "b") -> false
 * canConstruct("aa", "ab") -> false
 * canConstruct("aa", "aab") -> true
 *
 *
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/*

Solution 1 : Finding solution positive way(Linear Approach Solution O(n))
 build hashMap for magazine
 {
     a:2,
     b:1
 }

 hashMap deduction
{
    a:2
}

positive, true


*/
/*
Solution 2: Finding solution negative way  , proving the ransomNote cannot be generated using the hashmap



Smart thing is proving correct need must run through all sample space, 
but proving wrong is just needing one element wrong


characterFind

hash{
    magazineCharacterIndex: true
}
e.g

aa,aab

a in first loop of aab,
0:true

*/
function isRansomNoteCanNotUse(
  ransomNoteCharacter,
  j,
  magazine,
  usedCharByCharIndexInMagazine
) {
  let magazineCharacter = magazine[j];
  if (usedCharByCharIndexInMagazine[j]) {
    return true;
  }
  return magazineCharacter !== ransomNoteCharacter;
}
function isRansomNoteCanUse(
  ransomNoteCharacter,
  j,
  magazine,
  usedCharByCharIndexInMagazine
) {
  let magazineCharacter = magazine[j];
  if (usedCharByCharIndexInMagazine[j]) {
    return false;
  }
  return magazineCharacter === ransomNoteCharacter;
}
var canConstruct = function(ransomNote, magazine) {
  var usedCharByCharIndexInMagazine = {};
  for (var ransomNoteCharacter of ransomNote) {
    for (var j = 0, magazineLength = magazine.length; j < magazineLength; j++) {
      if (
        isRansomNoteCanUse(
          ransomNoteCharacter,
          j,
          magazine,
          usedCharByCharIndexInMagazine
        )
      ) {
        usedCharByCharIndexInMagazine[j] = true;
        break;
      }
    }
    //Loop through the magazine but still not find, so return false
    if (j === magazineLength) {
      //   console.log("failure,hash", ransomNoteCharIsFoundByCharIndex);
      return false;
    }
  }
  //   console.log("hash", ransomNoteCharIsFoundByCharIndex);
  return true;
};
