/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s.length === 0) {
    return 0;
  }

  // The first operator will always be implicitly '+'
  // since "string contains only non-negative integers".
  let op = "+";

  // this is kind of an "addition stack". the numbers in this stack
  // is sum'ed in the end.
  let stack = [];

  // n is the current digit. loop 1 more time than
  // the length of the string ('<='), to push the last digit
  // to the stack
  for (let i = 0, operand = 0; i <= s.length; ++i) {
    let currentCharacter = s.charAt(i);

    // always skipp white space
    if (currentCharacter === " ") continue;

    // aggregate the digits between each operator
    // into 'n'.

    if (currentCharacter >= "0" && currentCharacter <= "9") {
      console.log({ multiple: operand });
      operand = operand * 10 + parseInt(currentCharacter);
      continue;
    }
    //calculating the

    // we have now reached a non-digit character (an operator),
    // time to handle 'n', depending on the last seen operator.
    if (op === "+") {
      stack.push(operand);
    } else if (op === "-") {
      stack.push(-operand);
    } else if (op === "*") {
      stack.push(stack.pop() * operand);
    } else if (op === "/") {
      stack.push(Math.trunc(stack.pop() / operand));
    }

    // c must be and operator, so store it for the next number.
    op = currentCharacter;
    operand = 0;
  }
  // return the sum of the stack.
  return stack.reduce((n, acc) => n + acc, 0);
};
