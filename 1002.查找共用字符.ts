/*
 * @lc app=leetcode.cn id=1002 lang=typescript
 *
 * [1002] 查找共用字符
 *
 * https://leetcode.cn/problems/find-common-characters/description/
 *
 * algorithms
 * Easy (70.35%)
 * Likes:    376
 * Dislikes: 0
 * Total Accepted:    98.7K
 * Total Submissions: 140.2K
 * Testcase Example:  '["bella","label","roller"]'
 *
 * 给你一个字符串数组 words ，请你找出所有在 words 的每个字符串中都出现的共用字符（包括重复字符），并以数组形式返回。你可以按 任意顺序
 * 返回答案。
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["bella","label","roller"]
 * 输出：["e","l","l"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["cool","lock","cook"]
 * 输出：["c","o"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] 由小写英文字母组成
 *
 *
 */

// @lc code=start
function commonChars(words: string[]): string[] {
  const res: string[] = [];
  const firstWord = words[0];
  for (let i = 0; i < firstWord.length; i++) {
    const char = firstWord[i];
    if (words.every(word => word.includes(char))) {
      res.push(char);
      words = words.map(word => word.replace(char, ''));
    }
  }
  return res;
};
// @lc code=end
