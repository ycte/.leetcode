/*
 * @lc app=leetcode.cn id=461 lang=typescript
 *
 * [461] 汉明距离
 *
 * https://leetcode.cn/problems/hamming-distance/description/
 *
 * algorithms
 * Easy (81.93%)
 * Likes:    747
 * Dislikes: 0
 * Total Accepted:    313.6K
 * Total Submissions: 382.6K
 * Testcase Example:  '1\n4'
 *
 * 两个整数之间的 汉明距离 指的是这两个数字对应二进制位不同的位置的数目。
 *
 * 给你两个整数 x 和 y，计算并返回它们之间的汉明距离。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：x = 1, y = 4
 * 输出：2
 * 解释：
 * 1   (0 0 0 1)
 * 4   (0 1 0 0)
 * ⁠      ↑   ↑
 * 上面的箭头指出了对应二进制位不同的位置。
 *
 *
 * 示例 2：
 *
 *
 * 输入：x = 3, y = 1
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= x, y <= 2^31 - 1
 *
 *
 *
 *
 * 注意：本题与 2220. 转换数字的最少位翻转次数 相同。
 *
 */

// @lc code=start
function hammingDistance(x: number, y: number): number {
  let s = x ^ y;
  let ret = 0;
  while (s) {
    ret += s & 1;
    s >>= 1;
  }
  return ret;
};
// @lc code=end
