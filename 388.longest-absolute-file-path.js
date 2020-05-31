function lengthLongestPath(input) {
  var levelLineLengths = [];
  var lines = input.split("\n");
  let max = 0;

  for (let line of lines) {
    var level = line.lastIndexOf("\t") + 1;
    let lineLengthWithoutTab = line.length - level;
    //add previous level length, Important assumption here is in the same directory, the longest file will be at the last line
    levelLineLengths[level] =
      lineLengthWithoutTab + (level ? levelLineLengths[level - 1] : 0);

    //get the last index
    if (line.indexOf(".") !== -1) {
      max = Math.max(max, levelLineLengths[level] + level);
    }
  }
  return max;
}
