/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 *
 * https://leetcode.cn/problems/summary-ranges/description/
 *
 * algorithms
 * Easy (54.82%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    182K
 * Total Submissions: 332K
 * Testcase Example:  '[0,1,2,4,5,7]'
 *
 * 给定一个  无重复元素 的 有序 整数数组 nums 。
 *
 * 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于
 * nums 的数字 x 。
 *
 * 列表中的每个区间范围 [a,b] 应该按如下格式输出：
 *
 *
 * "a->b" ，如果 a != b
 * "a" ，如果 a == b
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [0,1,2,4,5,7]
 * 输出：["0->2","4->5","7"]
 * 解释：区间范围是：
 * [0,2] --> "0->2"
 * [4,5] --> "4->5"
 * [7,7] --> "7"
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [0,2,3,4,6,8,9]
 * 输出：["0","2->4","6","8->9"]
 * 解释：区间范围是：
 * [0,0] --> "0"
 * [2,4] --> "2->4"
 * [6,6] --> "6"
 * [8,9] --> "8->9"
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 20
 * -2^31 <= nums[i] <= 2^31 - 1
 * nums 中的所有值都 互不相同
 * nums 按升序排列
 *
 *
 */

// @lc code=start
function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }
  let ret: string[] = [];
  let left: number = nums[0];
  let right: number = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === 1) {
      right = nums[i];
    } else {
      if (left === right) {
        ret.push(`${left}`);
      } else {
        ret.push(`${left}->${right}`);
      }
      left = right = nums[i];
    }
  }
  if (left === right) {
    ret.push(`${left}`);
  } else {
    ret.push(`${left}->${right}`);
  }
  return ret;
};
// @lc code=end
