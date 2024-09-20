/*
 * @lc app=leetcode.cn id=405 lang=typescript
 *
 * [405] 数字转换为十六进制数
 *
 * https://leetcode.cn/problems/convert-a-number-to-hexadecimal/description/
 *
 * algorithms
 * Easy (54.75%)
 * Likes:    306
 * Dislikes: 0
 * Total Accepted:    74.6K
 * Total Submissions: 136.1K
 * Testcase Example:  '26'
 *
 * 给定一个整数，编写一个算法将这个数转换为十六进制数。对于负整数，我们通常使用 补码运算 方法。
 *
 * 答案字符串中的所有字母都应该是小写字符，并且除了 0 本身之外，答案中不应该有任何前置零。
 *
 * 注意: 不允许使用任何由库提供的将数字直接转换或格式化为十六进制的方法来解决这个问题。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：num = 26
 * 输出："1a"
 *
 *
 * 示例 2：
 *
 *
 * 输入：num = -1
 * 输出："ffffffff"
 *
 *
 *
 *
 * 提示：
 *
 *
 * -2^31 <= num <= 2^31 - 1
 *
 *
 */

// @lc code=start
function toHex(num: number): string {
  if (num === 0) return '0';
  const hex = '0123456789abcdef';
  let res = '';
  while (num !== 0 && res.length < 8) {
    res = hex[num & 0xf] + res;
    num >>= 4;
  }
  return res;
};
// @lc code=end
