/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 *
 * https://leetcode.cn/problems/symmetric-tree/description/
 *
 * algorithms
 * Easy (60.68%)
 * Likes:    2789
 * Dislikes: 0
 * Total Accepted:    1.2M
 * Total Submissions: 1.9M
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [1, 1000] 内
 * -100 <= Node.val <= 100
 *
 *
 *
 *
 * 进阶：你可以运用递归和迭代两种方法解决这个问题吗？
 *
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isMirror(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left &&!right) return true;
  if (!left ||!right) return false;
  if (left.val!== right.val) return false;
  return isMirror(left.left, right.right) && isMirror(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;
  // return isMirror(root.left, root.right);
  let stack: TreeNode[] = [];
  stack.push(root.left);
  stack.push(root.right);
  while (stack.length) {
    let right = stack.pop();
    let left = stack.pop();
    if (!left &&!right) continue;
    if (!left ||!right) return false;
    if (left.val!== right.val) return false;
    stack.push(left.left);
    stack.push(right.right);
    stack.push(left.right);
    stack.push(right.left);
  }
  return true;
};
// @lc code=end
