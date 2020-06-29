/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (50.24%)
 * Likes:    1649
 * Dislikes: 98
 * Total Accepted:    313.1K
 * Total Submissions: 615.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 *
 * Note: A leaf is a node with no children.
 *
 * Example:
 *
 *
 * Input:
 *
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 *
 * Output: ["1->2->5", "1->3"], ** all start from root, that's why we choose preorder method
 *
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let strs = [];
  if (root == undefined || root == undefined) return strs;
  helper(strs, root, "");
  return strs;
};
/*
    recursion tree(call) matching the structure of preorder definition, that's why it is so clean 

*/
function helper(strs, root, path) {
  if (root.left == null && root.right == null) {
    //end condition of recursion
    strs.push(path + root.val);
  }
  if (root.left != null) {
    //1-> is passed to next
    helper(strs, root.left, path + root.val + "->");
  }
  if (root.right != null) {
    helper(strs, root.right, path + root.val + "->");
  }
}
// @lc code=end
