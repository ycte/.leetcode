/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 *
 * https://leetcode.cn/problems/majority-element/description/
 *
 * algorithms
 * Easy (66.44%)
 * Likes:    2278
 * Dislikes: 0
 * Total Accepted:    1.1M
 * Total Submissions: 1.6M
 * Testcase Example:  '[3,2,3]'
 *
 * 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 *
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [3,2,3]
 * 输出：3
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,1,1,1,2,2]
 * 输出：2
 *
 *
 *
 * 提示：
 *
 *
 * n == nums.length
 * 1 <= n <= 5 * 10^4
 * -10^9 <= nums[i] <= 10^9
 *
 *
 *
 *
 * 进阶：尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。
 *
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map.has(num)) {
      map.set(num, map.get(num)! + 1);
    } else {
      map.set(num, 1);
    }
  }
  let max = 0;
  let maxKey = 0;
  map.forEach((value, key) => {
    if (value > max) {
      max = value;
      maxKey = key;
    }
  });
  return maxKey;
};
// @lc code=end
