/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  let sArray = s.split('');
  let stack: string[] = [];
  for (let i = 0; i < sArray.length; i++) {
    let c = sArray[i];
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      let top = stack.pop();
      if (c === ')' && top !== '(') {
        return false;
      }
      if (c === ']' && top !== '[') {
        return false;
      }
      if (c === '}' && top !== '{') {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
};
// @lc code=end
