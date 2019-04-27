//e.g 69=180 rotate=> 96
var isStrobogrammatic = function(num) {
  var rev = "";
  for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] === "6") rev += "9";
    if (num[i] === "9") rev += "6";
    if (num[i] === "1") rev += "1";
    if (num[i] === "8") rev += "8";
    if (num[i] === "0") rev += "0";
  }
  console.log("rev", rev);
  if (rev === num) return true;
  else return false;
};
