/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 *
 * https://leetcode.cn/problems/contains-duplicate/description/
 *
 * algorithms
 * Easy (55.32%)
 * Likes:    1101
 * Dislikes: 0
 * Total Accepted:    875.2K
 * Total Submissions: 1.6M
 * Testcase Example:  '[1,2,3,1]'
 *
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3,1]
 *
 * 输出：true
 *
 * 解释：
 *
 * 元素 1 在下标 0 和 3 出现。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,3,4]
 *
 * 输出：false
 *
 * 解释：
 *
 * 所有元素都不同。
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,1,3,3,4,3,2,4,2]
 *
 * 输出：true
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 10^5
 * -10^9 <= nums[i] <= 10^9
 *
 *
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
  const map = new Map<number, number>();
  for (const num of nums) {
    if (map.has(num)) return true;
    map.set(num, 1);
  }
  return false;
};
// @lc code=end
