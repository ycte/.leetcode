/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 *
 * https://leetcode.cn/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.64%)
 * Likes:    613
 * Dislikes: 0
 * Total Accepted:    209.6K
 * Total Submissions: 377K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的 回文串 的长度。
 *
 * 在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入:s = "abccccdd"
 * 输出:7
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 * 示例 2:
 *
 *
 * 输入:s = "a"
 * 输出:1
 * 解释：可以构造的最长回文串是"a"，它的长度是 1。
 *
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length <= 2000
 * s 只由小写 和/或 大写英文字母组成
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const map: Map<string, number> = new Map();
  let res = 0;
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }
  let hasOdd = false;
  for (const v of map.values()) {
    res += v;
    if (v % 2 !== 0) {
      res -= 1;
      hasOdd = true;
    }
  }
  return hasOdd ? res + 1 : res;
};
// @lc code=end
