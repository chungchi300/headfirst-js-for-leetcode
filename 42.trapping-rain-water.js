/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */

/*
# Sequentially find
maxCurrent
trapped
Rain:[0,1,0,2,1,0,1,3,2,1,2,1]
MaxC:[0,1,0,2,1,0,1,3,2,1,2,1]
Trap:[0,0,0,1,0,0,0,0,0,0,0,0]
first and last element don't count


# Smart method
water area = bound area - the left void and right void and land area

*/

var trap = function(heights) {
  let landArea = 0;
  let maxFromLeft = 0;
  let maxAreaFromLeft = 0;

  for (let h of heights) {
    landArea += h;
    maxFromLeft = Math.max(maxFromLeft, h);
    maxAreaFromLeft += maxFromLeft;
  }

  let maxFromRight = 0;
  let maxAreaFromRight = 0;

  for (let i = heights.length - 1; i >= 0; i--) {
    maxFromRight = Math.max(maxFromRight, heights[i]);
    maxAreaFromRight += maxFromRight;
  }
  /*

  { landArea: 14,(sum of height)
      maxFromLeft: 3,
        maxAreaFromLeft: 25,(potential max)
          maxFromRight: 3,
            maxAreaFromRight: 31 ,(potential  max),

            boundingArea: 36,(3*12)
              leftVoid: 11,
         rightVoid: 5 }


  }

    */
  if (maxFromLeft != maxFromRight) {
    throw Error("impossible");
  }
  const boundingArea = heights.length * maxFromLeft;
  const leftVoid = boundingArea - maxAreaFromLeft;
  const rightVoid = boundingArea - maxAreaFromRight;

  //   console.log({
  //     landArea,
  //     maxFromLeft,
  //     maxAreaFromLeft,
  //     maxFromRight,
  //     maxAreaFromRight,
  //     boundingArea,
  //     leftVoid,
  //     rightVoid
  //   });

  return boundingArea - leftVoid - rightVoid - landArea;
};
