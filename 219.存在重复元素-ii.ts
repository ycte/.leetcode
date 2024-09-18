/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 *
 * https://leetcode.cn/problems/contains-duplicate-ii/description/
 *
 * algorithms
 * Easy (47.15%)
 * Likes:    724
 * Dislikes: 0
 * Total Accepted:    330.6K
 * Total Submissions: 695.2K
 * Testcase Example:  '[1,2,3,1]\n3'
 *
 * 给你一个整数数组 nums 和一个整数 k ，判断数组中是否存在两个 不同的索引 i 和 j ，满足 nums[i] == nums[j] 且
 * abs(i - j) <= k 。如果存在，返回 true ；否则，返回 false 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1], k = 3
 * 输出：true
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,0,1,1], k = 1
 * 输出：true
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,2,3,1,2,3], k = 2
 * 输出：false
 *
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 * 0 <= k <= 10^5
 *
 *
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]!)! <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  // slow
  // const map: Map<number, Array<number>> = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (map.has(nums[i])) {
  //     const arr = map.get(nums[i])!;
  //     for (let j = 0; j < arr.length; j++) {
  //       if (Math.abs(arr[j] - i) <= k) {
  //         return true;
  //       }
  //     }
  //     arr.push(i);
  //   } else {
  //     map.set(nums[i], [i]);
  //   }
  // }
  // for (const [_, arr] of map) {
  //   if (arr.length > 1) {
  //     for (let i = 1; i < arr.length; i++) {
  //       if (Math.abs(arr[i] - arr[i - 1]) <= k) {
  //         return true;
  //       }
  //     }
  //   }
  // }
  return false;
};
// @lc code=end
