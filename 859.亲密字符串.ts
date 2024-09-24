/*
 * @lc app=leetcode.cn id=859 lang=typescript
 *
 * [859] 亲密字符串
 *
 * https://leetcode.cn/problems/buddy-strings/description/
 *
 * algorithms
 * Easy (34.93%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    76.1K
 * Total Submissions: 217.6K
 * Testcase Example:  '"ab"\n"ba"'
 *
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 *
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 *
 *
 * 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "ab", goal = "ba"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
 *
 * 示例 2：
 *
 *
 * 输入：s = "ab", goal = "ab"
 * 输出：false
 * 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
 *
 * 示例 3：
 *
 *
 * 输入：s = "aa", goal = "aa"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length, goal.length <= 2 * 10^4
 * s 和 goal 由小写英文字母组成
 *
 *
 */

// @lc code=start
function buddyStrings(s: string, goal: string): boolean {
    if (s.length !== goal.length) return false;
    if (s === goal) {
        const set = new Set<string>();
        for (const c of s) {
            if (set.has(c)) return true;
            set.add(c);
        }
        return false;
    }
    const diff: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }
    return diff.length === 2 && s[diff[0]] === goal[diff[1]] && s[diff[1]] === goal[diff[0]];
};
// @lc code=end
