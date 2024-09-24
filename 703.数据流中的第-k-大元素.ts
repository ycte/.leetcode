/*
 * @lc app=leetcode.cn id=703 lang=typescript
 *
 * [703] 数据流中的第 K 大元素
 *
 * https://leetcode.cn/problems/kth-largest-element-in-a-stream/description/
 *
 * algorithms
 * Easy (52.64%)
 * Likes:    480
 * Dislikes: 0
 * Total Accepted:    103.2K
 * Total Submissions: 195.6K
 * Testcase Example:  '["KthLargest","add","add","add","add","add"]\n' +
  '[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]'
 *
 * 设计一个找到数据流中第 k 大元素的类（class）。注意是排序后的第 k 大元素，不是第 k 个不同的元素。
 *
 * 请实现 KthLargest 类：
 *
 *
 * KthLargest(int k, int[] nums) 使用整数 k 和整数流 nums 初始化对象。
 * int add(int val) 将 val 插入数据流 nums 后，返回当前数据流中第 k 大的元素。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：
 * ["KthLargest", "add", "add", "add", "add", "add"]
 * [[3, [4, 5, 8, 2]], [3], [5], [10], [9], [4]]
 *
 * 输出：[null, 4, 5, 5, 8, 8]
 *
 * 解释：
 *
 * KthLargest kthLargest = new KthLargest(3, [4, 5, 8, 2]);
 * kthLargest.add(3); // 返回 4
 * kthLargest.add(5); // 返回 5
 * kthLargest.add(10); // 返回 5
 * kthLargest.add(9); // 返回 8
 * kthLargest.add(4); // 返回 8
 *
 *
 *
 *
 * 示例 2：
 *
 *
 * 输入：
 * ["KthLargest", "add", "add", "add", "add"]
 * [[4, [7, 7, 7, 7, 8, 3]], [2], [10], [9], [9]]
 *
 * 输出：[null, 7, 7, 7, 8]
 *
 * 解释：
 * KthLargest kthLargest = new KthLargest(4, [7, 7, 7, 7, 8, 3]);
 * kthLargest.add(2); // 返回 7
 * kthLargest.add(10); // 返回 7
 * kthLargest.add(9); // 返回 7
 * kthLargest.add(9); // 返回 8
 *
 *
 * 提示：
 *
 *
 * 0 <= nums.length <= 10^4
 * 1 <= k <= nums.length + 1
 * -10^4 <= nums[i] <= 10^4
 * -10^4 <= val <= 10^4
 * 最多调用 add 方法 10^4 次
 *
 *
 */

// @lc code=start
class KthLargest {
  private minHeap: number[];
  private k: number;

  constructor(k: number, nums: number[]) {
    this.k = k;
    this.minHeap = [];
    for (let num of nums) {
      this.add(num);
    }
  }

  add(val: number): number {
    if (this.minHeap.length < this.k) {
      this.minHeap.push(val);
      this.minHeap.sort((a, b) => a - b);
    } else if (val > this.minHeap[0]) {
      for (let i = 0; i < this.minHeap.length; i++) {
        if (val < this.minHeap[i]) {
          this.minHeap = this.minHeap.slice(1, i).concat(val, this.minHeap.slice(i));
          break;
        }
        if (i === this.minHeap.length - 1) {
          this.minHeap = this.minHeap.slice(1).concat(val);
        }
      }
    }
    return this.minHeap[0];
  }
}


/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end
