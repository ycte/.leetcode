/*
 * @lc app=leetcode.cn id=993 lang=typescript
 *
 * [993] 二叉树的堂兄弟节点
 *
 * https://leetcode.cn/problems/cousins-in-binary-tree/description/
 *
 * algorithms
 * Easy (59.07%)
 * Likes:    347
 * Dislikes: 0
 * Total Accepted:    83.4K
 * Total Submissions: 141K
 * Testcase Example:  '[1,2,3,4]\n4\n3'
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 *
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 *
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 *
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 * 输入：root = [1,2,3,4], x = 4, y = 3
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 *
 * 输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
 * 输出：true
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：root = [1,2,3,null,4], x = 2, y = 3
 * 输出：false
 *
 *
 *
 * 提示：
 *
 *
 * 二叉树的节点数介于 2 到 100 之间。
 * 每个节点的值都是唯一的、范围为 1 到 100 的整数。
 *
 *
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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let xParent: TreeNode | null = null;
  let yParent: TreeNode | null = null;
  let xDepth = -1;
  let yDepth = -1;

  function dfs(node: TreeNode | null, parent: TreeNode | null, depth: number) {
    if (!node) return;
    if (node.val === x) {
      xParent = parent;
      xDepth = depth;
    } else if (node.val === y) {
      yParent = parent;
      yDepth = depth;
    }
    dfs(node.left, node, depth + 1);
    dfs(node.right, node, depth + 1);
  }

  dfs(root, null, 0);

  return xDepth === yDepth && xParent !== yParent;
};
// @lc code=end
