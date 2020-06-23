const charMappings = [
  {
    "0": "",
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
  },
  {
    "0": "",
    "1": "X",
    "2": "XX",
    "3": "XXX",
    "4": "XL",
    "5": "L",
    "6": "LX",
    "7": "LXX",
    "8": "LXXX",
    "9": "XC",
  },
  {
    "0": "",
    "1": "C",
    "2": "CC",
    "3": "CCC",
    "4": "CD",
    "5": "D",
    "6": "DC",
    "7": "DCC",
    "8": "DCCC",
    "9": "CM",
  },
  {
    "0": "",
    "1": "M",
    "2": "MM",
    "3": "MMM",
  },
];
var intPosToRomanChar = function (position, char) {
  return charMappings[position - 1][char];
};
var intToRoman = function (num) {
  let numStr = "" + num;
  let numChars = numStr.split("");
  let ans = "";
  /*O(N) */
  for (let i = 0; i < numChars.length; i++) {
    //really good skill
    const digitPositionOfNum = numChars.length - i;

    const numChar = numChars[i];

    ans = ans + intPosToRomanChar(digitPositionOfNum, numChar);
  }
  return ans;
};
