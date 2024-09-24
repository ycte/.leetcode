/*
 * @lc app=leetcode.cn id=697 lang=typescript
 *
 * [697] 数组的度
 *
 * https://leetcode.cn/problems/degree-of-an-array/description/
 *
 * algorithms
 * Easy (59.01%)
 * Likes:    509
 * Dislikes: 0
 * Total Accepted:    105.3K
 * Total Submissions: 178.3K
 * Testcase Example:  '[1,2,2,3,1]'
 *
 * 给定一个非空且只包含非负数的整数数组 nums，数组的 度 的定义是指数组里任一元素出现频数的最大值。
 *
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,2,3,1]
 * 输出：2
 * 解释：
 * 输入数组的度是 2 ，因为元素 1 和 2 的出现频数最大，均为 2 。
 * 连续子数组里面拥有相同度的有如下所示：
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组 [2, 2] 的长度为 2 ，所以返回 2 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [1,2,2,3,1,4,2]
 * 输出：6
 * 解释：
 * 数组的度是 3 ，因为元素 2 重复出现 3 次。
 * 所以 [2,2,3,1,4,2] 是最短子数组，因此返回 6 。
 *
 *
 *
 *
 * 提示：
 *
 *
 * nums.length 在 1 到 50,000 范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 *
 *
 */

// @lc code=start
function findShortestSubArray(nums: number[]): number {
  const map = new Map<number, number[]>();
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], [1, i, i]);
      max = Math.max(max, 1);
    } else {
      const arr = map.get(nums[i])!;
      arr[0]++;
      arr[2] = i;
      max = Math.max(max, arr[0]);
    }
  }
  let res = nums.length;
  for (const [count, left, right] of map.values()) {
    // console.log("🚀 ~ findShortestSubArray ~ map:", map, right, left)
    if (count === max) {
      res = Math.min(res, right - left + 1);
    }
  }
  return res;
};

// @lc code=end

// console.log("🚀 ~ findShortestSubArray:", findShortestSubArray([2,1]))
