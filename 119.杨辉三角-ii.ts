/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 *
 * https://leetcode.cn/problems/pascals-triangle-ii/description/
 *
 * algorithms
 * Easy (69.11%)
 * Likes:    553
 * Dislikes: 0
 * Total Accepted:    319.8K
 * Total Submissions: 462.2K
 * Testcase Example:  '3'
 *
 * 给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。
 *
 * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
 *
 *
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: rowIndex = 3
 * 输出: [1,3,3,1]
 *
 *
 * 示例 2:
 *
 *
 * 输入: rowIndex = 0
 * 输出: [1]
 *
 *
 * 示例 3:
 *
 *
 * 输入: rowIndex = 1
 * 输出: [1,1]
 *
 *
 *
 *
 * 提示:
 *
 *
 * 0
 *
 *
 *
 *
 * 进阶：
 *
 * 你可以优化你的算法到 O(rowIndex) 空间复杂度吗？
 *
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  let res: number[] = new Array(rowIndex + 1).fill(1);
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i - 1; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
      console.log("🚀 ~ getRow ~ res:", res)
    }
  }
  // 1 3 3 1
  return res;
};
getRow(5);
// @lc code=end
