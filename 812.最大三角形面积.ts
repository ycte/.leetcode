/*
 * @lc app=leetcode.cn id=812 lang=typescript
 *
 * [812] 最大三角形面积
 *
 * https://leetcode.cn/problems/largest-triangle-area/description/
 *
 * algorithms
 * Easy (68.10%)
 * Likes:    200
 * Dislikes: 0
 * Total Accepted:    40.4K
 * Total Submissions: 59.4K
 * Testcase Example:  '[[0,0],[0,1],[1,0],[0,2],[2,0]]'
 *
 * 给你一个由 X-Y 平面上的点组成的数组 points ，其中 points[i] = [xi, yi]
 * 。从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。与真实值误差在 10^-5 内的答案将会视为正确答案。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
 * 输出：2.00000
 * 解释：输入中的 5 个点如上图所示，红色的三角形面积最大。
 *
 *
 * 示例 2：
 *
 *
 * 输入：points = [[1,0],[0,0],[0,1]]
 * 输出：0.50000
 *
 *
 *
 *
 * 提示：
 *
 *
 * 3 <= points.length <= 50
 * -50 <= xi, yi <= 50
 * 给出的所有点 互不相同
 *
 *
 */

// @lc code=start
function largestTriangleArea(points: number[][]): number {
  let max = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      for (let k = j + 1; k < points.length; k++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[j];
        const [x3, y3] = points[k];
        const area = Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2;
        max = Math.max(max, area);
      }
    }
  }
  return max;
};
// @lc code=end
