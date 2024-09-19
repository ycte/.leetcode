/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 *
 * https://leetcode.cn/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (64.42%)
 * Likes:    483
 * Dislikes: 0
 * Total Accepted:    215.8K
 * Total Submissions: 335.3K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t ，它们只包含小写字母。
 *
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *
 * 请找出在 t 中被添加的字母。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "abcd", t = "abcde"
 * 输出："e"
 * 解释：'e' 是那个被添加的字母。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "", t = "y"
 * 输出："y"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= s.length <= 1000
 * t.length == s.length + 1
 * s 和 t 只包含小写字母
 *
 *
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  // const map = new Map<string, number>();
  // for (const char of s) {
  //   map.set(char, (map.get(char) || 0) + 1);
  // }
  // for (const char of t) {
  //   if (!map.has(char) || map.get(char) === 0) {
  //     return char;
  //   }
  //   map.set(char, map.get(char)! - 1);
  // }
  // return '';
  // use bit manipulation
  let ret = 0;
  for (const char of s) {
    ret ^= char.charCodeAt(0);
  }
  for (const char of t) {
    ret ^= char.charCodeAt(0);
  }
  return String.fromCharCode(ret);

};
// @lc code=end
