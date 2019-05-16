//less efficient when it is unsorted
// head and end concat
//every loop range is shorten

//e.g
var twoSum = function(numbers, target) {
  var l = numbers.length,
    i = 0,
    j = l - 1;
  var sum = numbers[i] + numbers[j];
  while (sum !== target) {
    sum < target ? i++ : j--;
    sum = numbers[i] + numbers[j];
  }
  return [i + 1, j + 1];
};
