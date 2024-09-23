/*
 * @lc app=leetcode.cn id=653 lang=typescript
 *
 * [653] 两数之和 IV - 输入二叉搜索树
 *
 * https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/description/
 *
 * algorithms
 * Easy (63.57%)
 * Likes:    512
 * Dislikes: 0
 * Total Accepted:    123.5K
 * Total Submissions: 194.2K
 * Testcase Example:  '[5,3,6,2,4,null,7]\n9'
 *
 * 给定一个二叉搜索树 root 和一个目标结果 k，如果二叉搜索树中存在两个元素且它们的和等于给定的目标结果，则返回 true。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入: root = [5,3,6,2,4,null,7], k = 9
 * 输出: true
 *
 *
 * 示例 2：
 *
 *
 * 输入: root = [5,3,6,2,4,null,7], k = 28
 * 输出: false
 *
 *
 *
 *
 * 提示:
 *
 *
 * 二叉树的节点个数的范围是  [1, 10^4].
 * -10^4 <= Node.val <= 10^4
 * 题目数据保证，输入的 root 是一棵 有效 的二叉搜索树
 * -10^5 <= k <= 10^5
 *
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

function dfs(root: TreeNode | null, set: Set<number>, k: number): boolean {
  if (!root) return false;
  if (set.has(k - root.val)) return true;
  set.add(root.val);
  return dfs(root.left, set, k) || dfs(root.right, set, k);
}

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  return dfs(root, set, k);
};
// @lc code=end
