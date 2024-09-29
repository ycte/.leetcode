/*
 * @lc app=leetcode.cn id=1122 lang=typescript
 *
 * [1122] 数组的相对排序
 *
 * https://leetcode.cn/problems/relative-sort-array/description/
 *
 * algorithms
 * Easy (70.85%)
 * Likes:    298
 * Dislikes: 0
 * Total Accepted:    97.1K
 * Total Submissions: 137K
 * Testcase Example:  '[2,3,1,3,2,4,6,7,9,2,19]\n[2,1,4,3,9,6]'
 *
 * 给你两个数组，arr1 和 arr2，arr2 中的元素各不相同，arr2 中的每个元素都出现在 arr1 中。
 *
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1
 * 的末尾。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
 * 输出：[2,2,2,1,4,3,3,9,6,7,19]
 *
 *
 * 示例  2:
 *
 *
 * 输入：arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
 * 输出：[22,28,8,6,17,44]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= arr1.length, arr2.length <= 1000
 * 0 <= arr1[i], arr2[i] <= 1000
 * arr2 中的元素 arr2[i]  各不相同 
 * arr2 中的每个元素 arr2[i] 都出现在 arr1 中
 *
 *
 */

// @lc code=start
function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < arr2.length; i++) {
        map.set(arr2[i], i);
    }
    return arr1.sort((a, b) => {
        if (map.has(a) && map.has(b)) {
            return (map.get(a) || 0) - (map.get(b) || 0);
        }
        if (map.has(a) && !map.has(b)) {
            return -1;
        }
        if (!map.has(a) && map.has(b)) {
            return 1;
        }
        return a - b;
    });
};
// @lc code=end
