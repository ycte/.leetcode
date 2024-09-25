/*
 * @lc app=leetcode.cn id=941 lang=typescript
 *
 * [941] 有效的山脉数组
 *
 * https://leetcode.cn/problems/valid-mountain-array/description/
 *
 * algorithms
 * Easy (39.90%)
 * Likes:    239
 * Dislikes: 0
 * Total Accepted:    96.4K
 * Total Submissions: 241.4K
 * Testcase Example:  '[2,1]'
 *
 * 给定一个整数数组 arr，如果它是有效的山脉数组就返回 true，否则返回 false。
 *
 * 让我们回顾一下，如果 arr 满足下述条件，那么它是一个山脉数组：
 *
 *
 * arr.length >= 3
 * 在 0 < i < arr.length - 1 条件下，存在 i 使得：
 *
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：arr = [2,1]
 * 输出：false
 *
 *
 * 示例 2：
 *
 *
 * 输入：arr = [3,5,5]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：arr = [0,3,2,1]
 * 输出：true
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^4
 *
 *
 */

// @lc code=start
function validMountainArray(arr: number[]): boolean {
  const n = arr.length;
  let i = 0;

  // 递增扫描
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  // 最高点不能是数组的第一个位置或最后一个位置
  if (i === 0 || i === n - 1) {
    return false;
  }

  // 递减扫描
  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
};
// @lc code=end
