const BASIC = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen"
];
const TWENTIES = [
  "",
  "",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety"
];
const HUNDREDS = ["Hundred"];
const OVER_THOUSANDS = ["", "Thousand", "Million", "Billion", "Trillion"];

// num MUST BE less than 1000 , 0-999,e.g 996
var threePack = function(num) {
  console.log("three pack", num);
  let res = "";
  //res Nine Hundread ,num before 996, after 96
  if (num >= 100) {
    res += BASIC[Math.floor(num / 100)] + " ";
    res += HUNDREDS[0] + " ";
    num %= 100;
  }
  //res 9,num before 996, after 96, > 20,30,40,50,60,70,80,90 mapping
  if (num >= 20) {
    res += TWENTIES[Math.floor(num / 10)] + " ";
    num %= 10;
  }
  //show value when below 19
  if (num > 0) {
    res += BASIC[num] + " ";
  }
  return res;
};
/**
 * @param {number} num
 * @return {string}
 */
var numberNeedConversion = function(num, divider) {
  if (num < divider) {
    return true;
  } else {
    return false;
  }
};
//very intuitive!
var numberToWords = function(num) {
  if (num === 0) {
    return BASIC[0];
  }

  let ans = "";
  for (let i = OVER_THOUSANDS.length - 1; i >= 0; i -= 1) {
    //from trillion to zero conversion
    const divider = Math.pow(1000, i);
    console.log("divider", divider);
    if (numberNeedConversion(num, divider)) {
      continue;
    }

    ans += threePack(Math.floor(num / divider));
    ans += OVER_THOUSANDS[i] === "" ? "" : OVER_THOUSANDS[i] + " ";
    num %= divider;
  }

  return ans.substring(0, ans.length - 1);
};
