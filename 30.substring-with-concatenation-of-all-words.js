/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = (s, words) => {
  // Sanity check
  if (!words || words.length === 0) return [];

  const m = words.length,
    n = words[0].length,
    len = m * n,
    result = [];

  // Build the word-count hash map
  const map = {};
  for (word of words) map[word] = ~~map[word] + 1;

  // Try every possible start position i
  for (let i = 0; i < s.length - len + 1; i++) {
    // Make a copy of the hash map
    const temp = Object.assign({}, map);

    for (let j = i; j < i + len; j += n) {
      const str = s.substr(j, n);
      // Cannot find the word in hash map (words list), try another position
      if (!(str in temp)) break;
      // All the same word str are found, remove it from the hash map
      if (--temp[str] === 0) delete temp[str];
    }

    // We have gone through the whole s and used all our words in the list
    if (Object.keys(temp).length === 0) result.push(i);
  }

  return result;
};
