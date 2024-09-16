/*
 * @lc app=leetcode.cn id=67 lang=typescript
 *
 * [67] 二进制求和
 *
 * https://leetcode.cn/problems/add-binary/description/
 *
 * algorithms
 * Easy (53.24%)
 * Likes:    1230
 * Dislikes: 0
 * Total Accepted:    419.9K
 * Total Submissions: 786.4K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给你两个二进制字符串 a 和 b ，以二进制字符串的形式返回它们的和。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入:a = "11", b = "1"
 * 输出："100"
 *
 * 示例 2：
 *
 *
 * 输入：a = "1010", b = "1011"
 * 输出："10101"
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= a.length, b.length <= 10^4
 * a 和 b 仅由字符 '0' 或 '1' 组成
 * 字符串如果不是 "0" ，就不含前导零
 *
 *
 */

// @lc code=start
function addBinary(a: string, b: string): string {
  const len = Math.max(a.length, b.length);
  let carry = 0;
  let res = '';
  for (let i = 0; i < len; i++) {
    const sum = (+a[a.length - 1 - i] || 0) + (+b[b.length - 1 - i] || 0) + carry;
    res = `${sum % 2}${res}`;
    carry = sum >= 2 ? 1 : 0;
  }
  return carry ? `1${res}` : res;
};
// @lc code=end
