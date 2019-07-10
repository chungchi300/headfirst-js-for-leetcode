function test(a, b) {
  return a + b;
}
console.log(test.apply(this, [2, 3]));
console.log(test.call(this, 2, 3));
console.log(test.call(this, [2, 3]));
console.log(test.call(2, 3));
// console.log(test.apply(this, 2, 3));
