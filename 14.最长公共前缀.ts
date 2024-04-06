/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  for (let i = 0; i < strs[0].length; i++) {
    let flag = true
    strs.forEach(str => {
      if (str[i] !== strs[0][i]) {
        flag = false
      }
    })
    if (!flag) {
      return strs[0].slice(0, i)
    }
  }
  return strs[0]
};
// @lc code=end

