/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode.cn/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (66.79%)
 * Likes:    949
 * Dislikes: 0
 * Total Accepted:    842.7K
 * Total Submissions: 1.3M
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的 字母异位词。
 *
 *
 *
 * 示例 1:
 *
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= s.length, t.length <= 5 * 10^4
 * s 和 t 仅包含小写字母
 *
 *
 *
 *
 * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  const mapS = new Map<string, number>();
  const mapT = new Map<string, number>();
  for (const c of Array.from(s)) {
    mapS.set(c, (mapS.get(c) || 0) + 1);
  }
  for (const c of Array.from(t)) {
    mapT.set(c, (mapT.get(c) || 0) + 1);
  }
  if (mapS.size !== mapT.size) return false;
  for (const [key, value] of mapS) {
    if (mapT.get(key) !== value) return false;
  }
  return true;
};
// @lc code=end
