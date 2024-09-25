/*
 * @lc app=leetcode.cn id=917 lang=typescript
 *
 * [917] 仅仅反转字母
 *
 * https://leetcode.cn/problems/reverse-only-letters/description/
 *
 * algorithms
 * Easy (59.38%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    86K
 * Total Submissions: 144.8K
 * Testcase Example:  '"ab-cd"'
 *
 * 给你一个字符串 s ，根据下述规则反转字符串：
 *
 *
 * 所有非英文字母保留在原有位置。
 * 所有英文字母（小写或大写）位置反转。
 *
 *
 * 返回反转后的 s 。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ab-cd"
 * 输出："dc-ba"
 *
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "a-bC-dEf-ghIj"
 * 输出："j-Ih-gfE-dCba"
 *
 *
 *
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "Test1ng-Leet=code-Q!"
 * 输出："Qedo1ct-eeLg=ntse-T!"
 *
 *
 *
 *
 * 提示
 *
 *
 * 1 <= s.length <= 100
 * s 仅由 ASCII 值在范围 [33, 122] 的字符组成
 * s 不含 '\"' 或 '\\'
 *
 *
 */

// @lc code=start
function isLetter(c: string): boolean {
  return /[a-zA-Z]/.test(c);
}
function reverseOnlyLetters(s: string): string {
  const arr = s.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (!isLetter(arr[left])) {
      left++;
    } else if (!isLetter(arr[right])) {
      right--;
    } else {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  }
  return arr.join("");
};
// @lc code=end
