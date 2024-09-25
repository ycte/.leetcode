/*
 * @lc app=leetcode.cn id=953 lang=typescript
 *
 * [953] 验证外星语词典
 *
 * https://leetcode.cn/problems/verifying-an-alien-dictionary/description/
 *
 * algorithms
 * Easy (57.73%)
 * Likes:    269
 * Dislikes: 0
 * Total Accepted:    59.5K
 * Total Submissions: 103.1K
 * Testcase Example:  '["hello","leetcode"]\n"hlabcdefgijkmnopqrstuvwxyz"'
 *
 * 某种外星语也使用英文小写字母，但可能顺序 order 不同。字母表的顺序（order）是一些小写字母的排列。
 *
 * 给定一组用外星语书写的单词 words，以及其字母表的顺序 order，只有当给定的单词在这种外星语中按字典序排列时，返回 true；否则，返回
 * false。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
 * 输出：true
 * 解释：在该语言的字母表中，'h' 位于 'l' 之前，所以单词序列是按字典序排列的。
 *
 * 示例 2：
 *
 *
 * 输入：words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
 * 输出：false
 * 解释：在该语言的字母表中，'d' 位于 'l' 之后，那么 words[0] > words[1]，因此单词序列不是按字典序排列的。
 *
 * 示例 3：
 *
 *
 * 输入：words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
 * 输出：false
 * 解释：当前三个字符 "app" 匹配时，第二个字符串相对短一些，然后根据词典编纂规则 "apple" > "app"，因为 'l' > '∅'，其中
 * '∅' 是空白字符，定义为比任何其他字符都小（更多信息）。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * 1
 * order.length == 26
 * 在 words[i] 和 order 中的所有字符都是英文小写字母。
 *
 *
 */

// @lc code=start
function compare(a: string, b: string, map: Map<string, number>): boolean {
  const n = a.length;
  const m = b.length;
  for (let i = 0; i < n && i < m; i++) {
    if (a[i] !== b[i]) {
      return map.get(a[i])! < map.get(b[i])!;
    }
  }
  return n <= m;
}
function isAlienSorted(words: string[], order: string): boolean {
  const map = new Map<string, number>();
  for (let i = 0; i < order.length; i++) {
    map.set(order[i], i);
  }
  for (let i = 1; i < words.length; i++) {
    if (!compare(words[i - 1], words[i], map)) {
      return false;
    }
  }
  return true;
};
// @lc code=end
