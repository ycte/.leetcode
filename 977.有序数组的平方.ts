/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 *
 * https://leetcode.cn/problems/squares-of-a-sorted-array/description/
 *
 * algorithms
 * Easy (68.18%)
 * Likes:    1041
 * Dislikes: 0
 * Total Accepted:    748.3K
 * Total Submissions: 1.1M
 * Testcase Example:  '[-4,-1,0,3,10]'
 *
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 *
 *
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [-4,-1,0,3,10]
 * 输出：[0,1,9,16,100]
 * 解释：平方后，数组变为 [16,1,0,9,100]
 * 排序后，数组变为 [0,1,9,16,100]
 *
 * 示例 2：
 *
 *
 * 输入：nums = [-7,-3,2,3,11]
 * 输出：[4,9,9,49,121]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 10^4
 * -10^4
 * nums 已按 非递减顺序 排序
 *
 *
 *
 *
 * 进阶：
 *
 *
 * 请你设计时间复杂度为 O(n) 的算法解决本问题
 *
 *
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let res: number[] = [];
  while (left <= right) {
    if (nums[left] ** 2 > nums[right] ** 2) {
      res.unshift(nums[left] ** 2);
      left++;
    } else {
      res.unshift(nums[right] ** 2);
      right--;
    }
  }
  return res;
};
// @lc code=end
