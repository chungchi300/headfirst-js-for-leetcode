/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (30.92%)
 * Total Accepted:    830.5K
 * Total Submissions: 2.7M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
 First of all, if if addition is the only operation, it should store  two numbers in primitive float type


*/
/* break down of problem for most direct idea
1. listNodeToNum
2. addition
3. NumToListNode

*/
function listNodeToNum(listNode, num) {
  if (listNode != null) {
    // console.log("num", parseFloat(listNode.val));
    return listNodeToNum(listNode.next, num) + num;
  } else {
    return num;
  }
}

var addTwoNumbers = function(l1, l2) {
  console.log(listNodeToNum(l1, ""));
};
