/*
 * @lc app=leetcode.cn id=1013 lang=typescript
 *
 * [1013] 将数组分成和相等的三个部分
 *
 * https://leetcode.cn/problems/partition-array-into-three-parts-with-equal-sum/description/
 *
 * algorithms
 * Easy (38.49%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    65.7K
 * Total Submissions: 170.6K
 * Testcase Example:  '[0,2,1,-6,6,-7,9,1,2,0,1]'
 *
 * 给你一个整数数组 arr，只有可以将其划分为三个和相等的 非空 部分时才返回 true，否则返回 false。
 *
 * 形式上，如果可以找出索引 i + 1 < j 且满足 (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] +
 * arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length
 * - 1]) 就可以将数组三等分。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：arr = [0,2,1,-6,6,-7,9,1,2,0,1]
 * 输出：true
 * 解释：0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
 *
 *
 * 示例 2：
 *
 *
 * 输入：arr = [0,2,1,-6,6,7,9,-1,2,0,1]
 * 输出：false
 *
 *
 * 示例 3：
 *
 *
 * 输入：arr = [3,3,6,5,-2,2,5,1,-9,4]
 * 输出：true
 * 解释：3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3
 * -10^4
 *
 *
 */

// @lc code=start
function canThreePartsEqualSum(arr: number[]): boolean {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  if (sum % 3 !== 0) return false;
  const target = sum / 3;
  let count = 0;
  let cur = 0;
  for (let i = 0; i < arr.length; i++) {
    cur += arr[i];
    if (cur === target) {
      count++;
      cur = 0;
    }
  }
  return count >= 3;
};
// @lc code=end
