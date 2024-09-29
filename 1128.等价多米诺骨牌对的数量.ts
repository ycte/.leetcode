/*
 * @lc app=leetcode.cn id=1128 lang=typescript
 *
 * [1128] 等价多米诺骨牌对的数量
 *
 * https://leetcode.cn/problems/number-of-equivalent-domino-pairs/description/
 *
 * algorithms
 * Easy (54.45%)
 * Likes:    162
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 86.8K
 * Testcase Example:  '[[1,2],[2,1],[3,4],[5,6]]'
 *
 * 给你一组多米诺骨牌 dominoes 。
 *
 * 形式上，dominoes[i] = [a, b] 与 dominoes[j] = [c, d] 等价 当且仅当 (a == c 且 b == d) 或者
 * (a == d 且 b == c) 。即一张骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌。
 *
 * 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对
 * (i, j) 的数量。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 * 输入：dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]
 * 输出：3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= dominoes.length <= 4 * 10^4
 * dominoes[i].length == 2
 * 1 <= dominoes[i][j] <= 9
 *
 *
 */

// @lc code=start
function numEquivDominoPairs(dominoes: number[][]): number {
  const map = new Map<string, number>();
  let res = 0;
  for (const domino of dominoes) {
    const key = domino[0] <= domino[1] ? domino.join(',') : domino.reverse().join(',');
    res += map.get(key) || 0;
    map.set(key, (map.get(key) || 0) + 1);
  }
  return res;
};
// @lc code=end
