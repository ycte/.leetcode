/*
 * @lc app=leetcode.cn id=500 lang=typescript
 *
 * [500] 键盘行
 *
 * https://leetcode.cn/problems/keyboard-row/description/
 *
 * algorithms
 * Easy (73.96%)
 * Likes:    265
 * Dislikes: 0
 * Total Accepted:    80.9K
 * Total Submissions: 109.3K
 * Testcase Example:  '["Hello","Alaska","Dad","Peace"]'
 *
 * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
 *
 * 美式键盘 中：
 *
 *
 * 第一行由字符 "qwertyuiop" 组成。
 * 第二行由字符 "asdfghjkl" 组成。
 * 第三行由字符 "zxcvbnm" 组成。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["Hello","Alaska","Dad","Peace"]
 * 输出：["Alaska","Dad"]
 *
 *
 * 示例 2：
 *
 *
 * 输入：words = ["omk"]
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：words = ["adsdf","sfd"]
 * 输出：["adsdf","sfd"]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * words[i] 由英文字母（小写和大写字母）组成
 *
 *
 */

// @lc code=start
function findWords(words: string[]): string[] {
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return words.filter(word => {
    let row = -1;
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].includes(word[0].toLowerCase())) {
        row = i;
        break;
      }
    }
    for (let i = 1; i < word.length; i++) {
      if (!rows[row].includes(word[i].toLowerCase())) {
        return false;
      }
    }
    return true;
  });
};
// @lc code=end
