/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 *
 * https://leetcode.cn/problems/isomorphic-strings/description/
 *
 * algorithms
 * Easy (49.43%)
 * Likes:    737
 * Dislikes: 0
 * Total Accepted:    298.4K
 * Total Submissions: 601.9K
 * Testcase Example:  '"egg"\n"add"'
 *
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 *
 * 如果 s 中的字符可以按某种映射关系替换得到 t ，那么这两个字符串是同构的。
 *
 *
 * 每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序。不同字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入：s = "egg", t = "add"
 * 输出：true
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "foo", t = "bar"
 * 输出：false
 *
 * 示例 3：
 *
 *
 * 输入：s = "paper", t = "title"
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 *
 *
 * 1 <= s.length <= 5 * 10^4
 * t.length == s.length
 * s 和 t 由任意有效的 ASCII 字符组成
 *
 *
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  let map: Map<string, string> = new Map();
  let sLen = s.length;
  let tLen = t.length;
  if (sLen !== tLen) return false;
  for (let i = 0; i < sLen; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      // t also has a set-value
      if (Array.from(map.values()).indexOf(t[i]) !== -1) {
        return false;
      }
      map.set(s[i], t[i]);
    }
  }
  return true;
};
// @lc code=end
