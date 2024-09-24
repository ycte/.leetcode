/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 *
 * https://leetcode.cn/problems/most-common-word/description/
 *
 * algorithms
 * Easy (45.71%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    68.1K
 * Total Submissions: 149K
 * Testcase Example:  '"Bob hit a ball, the hit BALL flew far after it was hit."\n["hit"]'
 *
 * 给你一个字符串 paragraph 和一个表示禁用词的字符串数组 banned ，返回出现频率最高的非禁用词。题目数据 保证
 * 至少存在一个非禁用词，且答案 唯一 。
 *
 * paragraph 中的单词 不区分大小写 ，答案应以 小写 形式返回。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.",
 * banned = ["hit"]
 * 输出："ball"
 * 解释：
 * "hit" 出现了 3 次，但它是禁用词。
 * "ball" 出现了两次（没有其他单词出现这么多次），因此它是段落中出现频率最高的非禁用词。
 * 请注意，段落中的单词不区分大小写，
 * 标点符号会被忽略（即使它们紧挨着单词，如 "ball,"），
 * 并且尽管 "hit" 出现的次数更多，但它不能作为答案，因为它是禁用词。
 *
 *
 * 示例 2：
 *
 *
 * 输入：paragraph = "a.", banned = []
 * 输出："a"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= paragraph.length <= 1000
 * paragraph 由英文字母、空格 ' '、和以下符号组成："!?',;."
 * 0 <= banned.length <= 100
 * 1 <= banned[i].length <= 10
 * banned[i] 仅由小写英文字母组成
 *
 *
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {

  const words = paragraph.toLowerCase().replace(/[^a-z]/g, ' ').split(/\s+/);
  console.log("🚀 ~ mostCommonWord ~ words:", words)
  const map = new Map<string, number>();
  for (const word of words) {
    if (!banned.includes(word) && word !== '') {
      map.set(word, (map.get(word) || 0) + 1);
    }
  }
  return [...map.entries()].sort((a, b) => b[1] - a[1])[0][0];
};
console.log("🚀 ~ mostCommonWord ~ mostCommonWord:", mostCommonWord("..Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))
// @lc code=end
