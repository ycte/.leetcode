/*
 * @lc app=leetcode.cn id=617 lang=typescript
 *
 * [617] 合并二叉树
 *
 * https://leetcode.cn/problems/merge-two-binary-trees/description/
 *
 * algorithms
 * Easy (79.41%)
 * Likes:    1422
 * Dislikes: 0
 * Total Accepted:    513K
 * Total Submissions: 645.3K
 * Testcase Example:  '[1,3,2,5]\n[2,1,3,null,4,null,7]'
 *
 * 给你两棵二叉树： root1 和 root2 。
 *
 *
 * 想象一下，当你将其中一棵覆盖到另一棵之上时，两棵树上的一些节点将会重叠（而另一些不会）。你需要将这两棵树合并成一棵新二叉树。合并的规则是：如果两个节点重叠，那么将这两个节点的值相加作为合并后节点的新值；否则，不为
 * null 的节点将直接作为新二叉树的节点。
 *
 * 返回合并后的二叉树。
 *
 * 注意: 合并过程必须从两个树的根节点开始。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
 * 输出：[3,4,5,5,4,null,7]
 *
 *
 * 示例 2：
 *
 *
 * 输入：root1 = [1], root2 = [1,2]
 * 输出：[2,2]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 两棵树中的节点数目在范围 [0, 2000] 内
 * -10^4 <= Node.val <= 10^4
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

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (!root1) return root2;
  if (!root2) return root1;
  const root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};
// @lc code=end
