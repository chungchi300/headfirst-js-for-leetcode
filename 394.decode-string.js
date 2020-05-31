/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let tempNumArr = [];
  let number = [];
  let string = [];
  for (let i = 0; i < s.length; i++) {
    // if is number, push to temp number array
    if (s[i].match(/\d/)) {
      tempNumArr.push(s[i]);
    } else {
      // if not number, first clean up temp number arr , and push a number
      if (tempNumArr.length > 0) {
        number.push(tempNumArr.join(""));
        tempNumArr = [];
      }
      // then, if is ], pop until [
      if (s[i].match(/\]/)) {
        let tempStr = "";
        let current = string.pop();
        while (!current.match(/\[/)) {
          tempStr = current + tempStr;
          current = string.pop();
        }

        // use the last number in number stack
        let tempNumToNum = Number(number.pop());
        //Reproduce the string
        while (tempNumToNum > 0) {
          string.push(tempStr);
          tempNumToNum--;
        }
      } else {
        string.push(s[i]);
      }
    }
  }
  return string.join("");
};
//The Magic Of Stack is the it can find the nearest operation
