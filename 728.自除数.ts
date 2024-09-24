/*
 * @lc app=leetcode.cn id=728 lang=typescript
 *
 * [728] 自除数
 *
 * https://leetcode.cn/problems/self-dividing-numbers/description/
 *
 * algorithms
 * Easy (76.30%)
 * Likes:    271
 * Dislikes: 0
 * Total Accepted:    87.3K
 * Total Submissions: 114.4K
 * Testcase Example:  '1\n22'
 *
 * 自除数 是指可以被它包含的每一位数整除的数。
 *
 *
 * 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 *
 *
 * 自除数 不允许包含 0 。
 *
 * 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right]（包括两个端点）内所有的 自除数 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：left = 1, right = 22
 * 输出：[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
 *
 *
 * 示例 2:
 *
 *
 * 输入：left = 47, right = 85
 * 输出：[48,55,66,77]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= left <= right <= 10^4
 *
 *
 */


// @lc code=start
function isSelfDividing(num: number): boolean {
  const numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    const digit = parseInt(numStr[i]);
    if (digit === 0 || num % digit !== 0) {
      return false;
    }
  }
  return true;
}
function selfDividingNumbers(left: number, right: number): number[] {
  const res: number[] = [];
  for (let i = left; i <= right; i++) {
    if (isSelfDividing(i)) {
      res.push(i);
    }
  }
  return res;
};
// @lc code=end
