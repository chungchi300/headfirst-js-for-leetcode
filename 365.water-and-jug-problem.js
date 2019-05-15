/*

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

*/

/* Previous

https://zh-yue.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E5%85%AC%E5%9B%A0%E6%95%B8

https://zh-yue.wikipedia.org/wiki/%E8%BC%BE%E8%BD%89%E7%9B%B8%E9%99%A4%E6%B3%95

*/

/*
https://zh.wikipedia.org/wiki/%E8%B2%9D%E7%A5%96%E7%AD%89%E5%BC%8F
https://en.wikipedia.org/wiki/Euclidean_algorithm#Algorithmic_efficiency

*/

/*

Definition

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

https://www.youtube.com/watch?v=6cAbgAaEOVE   - it is very important question

*/

var canMeasureWater = function(x, y, z) {
  if (z > x + y) return false;
  const terms = { "0": 1, [x]: 1, [y]: 1 };
  let xsum = x;
  let ysum = y;
  let stop = x * y;
  while (xsum < stop || ysum < stop) {
    if (xsum < ysum) {
      terms[ysum - xsum] = 1;
      xsum += x;
    } else {
      terms[xsum - ysum] = 1;
      ysum += y;
    }
  }
  for (let key in terms) {
    if (terms[z - key]) return true;
  }
  return false;
};
