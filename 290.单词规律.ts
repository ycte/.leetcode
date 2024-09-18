/*
 * @lc app=leetcode.cn id=290 lang=typescript
 *
 * [290] 单词规律
 *
 * https://leetcode.cn/problems/word-pattern/description/
 *
 * algorithms
 * Easy (44.76%)
 * Likes:    668
 * Dislikes: 0
 * Total Accepted:    201.7K
 * Total Submissions: 450K
 * Testcase Example:  '"abba"\n"dog cat cat dog"'
 *
 * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
 *
 * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 s 中的每个非空单词之间存在着双向连接的对应规律。
 *
 *
 *
 * 示例1:
 *
 *
 * 输入: pattern = "abba", s = "dog cat cat dog"
 * 输出: true
 *
 * 示例 2:
 *
 *
 * 输入:pattern = "abba", s = "dog cat cat fish"
 * 输出: false
 *
 * 示例 3:
 *
 *
 * 输入: pattern = "aaaa", s = "dog cat cat dog"
 * 输出: false
 *
 *
 *
 * 提示:
 *
 *
 * 1 <= pattern.length <= 300
 * pattern 只包含小写英文字母
 * 1 <= s.length <= 3000
 * s 只包含小写英文字母和 ' '
 * s 不包含 任何前导或尾随对空格
 * s 中每个单词都被 单个空格 分隔
 *
 *
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const map = new Map<string, string>()
  const words = s.split(' ')
  if (pattern.length !== words.length) return false
  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) return false
    } else {
      if (Array.from(map.values()).includes(words[i])) return false
      map.set(pattern[i], words[i])
    }
  }
  return true
};
// @lc code=end
