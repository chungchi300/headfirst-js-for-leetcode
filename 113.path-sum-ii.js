/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (45.40%)
 * Likes:    1711
 * Dislikes: 63
 * Total Accepted:    325.3K
 * Total Submissions: 707.7K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 * Given the below binary tree and sum = 22,
 *
 *
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 *
 *
 * Return:
 *
 *
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
 * ]
 *
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  let pointsGroup = [];
  if (root == null) return pointsGroup;
  helper(pointsGroup, [], root, sum);
  return pointsGroup;
};
function helper(pointsGroup, points, root, sum) {
  if (root == null) return;
  points.push(root.val);
  //stop point
  if (root.left == null && root.right == null) {
    console.log({ sum });
    if (sum == root.val) {
      //copy,instead of pointer
      pointsGroup.push([...points]);
    }
  }

  helper(pointsGroup, points, root.left, sum - root.val);
  helper(pointsGroup, points, root.right, sum - root.val);
  //removing bottom elements to go up one point
  let popingElements = points.pop();
  console.log({ popingElements });
}
// @lc code=end
