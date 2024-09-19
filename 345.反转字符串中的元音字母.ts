/*
 * @lc app=leetcode.cn id=345 lang=typescript
 *
 * [345] 反转字符串中的元音字母
 *
 * https://leetcode.cn/problems/reverse-vowels-of-a-string/description/
 *
 * algorithms
 * Easy (54.95%)
 * Likes:    361
 * Dislikes: 0
 * Total Accepted:    209.1K
 * Total Submissions: 379.6K
 * Testcase Example:  '"IceCreAm"'
 *
 * 给你一个字符串 s ，仅反转字符串中的所有元音字母，并返回结果字符串。
 *
 * 元音字母包括 'a'、'e'、'i'、'o'、'u'，且可能以大小写两种形式出现不止一次。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "IceCreAm"
 *
 * 输出："AceCreIm"
 *
 * 解释：
 *
 * s 中的元音是 ['I', 'e', 'e', 'A']。反转这些元音，s 变为 "AceCreIm".
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "leetcode"
 *
 * 输出："leotcede"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 3 * 10^5
 * s 由 可打印的 ASCII 字符组成
 *
 *
 */

// @lc code=start
function reverseVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (!vowels.has(arr[left])) {
      left++;
    } else if (!vowels.has(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join('');
};
// @lc code=end
