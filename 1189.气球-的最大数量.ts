/*
 * @lc app=leetcode.cn id=1189 lang=typescript
 *
 * [1189] “气球” 的最大数量
 *
 * https://leetcode.cn/problems/maximum-number-of-balloons/description/
 *
 * algorithms
 * Easy (68.16%)
 * Likes:    141
 * Dislikes: 0
 * Total Accepted:    64.4K
 * Total Submissions: 94.5K
 * Testcase Example:  '"nlaebolko"'
 *
 * 给你一个字符串 text，你需要使用 text 中的字母来拼凑尽可能多的单词 "balloon"（气球）。
 *
 * 字符串 text 中的每个字母最多只能被使用一次。请你返回最多可以拼凑出多少个单词 "balloon"。
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：text = "nlaebolko"
 * 输出：1
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：text = "loonbalxballpoon"
 * 输出：2
 *
 *
 * 示例 3：
 *
 *
 * 输入：text = "leetcode"
 * 输出：0
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= text.length <= 10^4
 * text 全部由小写英文字母组成
 *
 *
 *
 *
 * 注意：本题与 2287. 重排字符形成目标字符串 相同。
 *
 */

// @lc code=start
function maxNumberOfBalloons(text: string): number {
    const map = new Map<string, number>();
    for (const c of text) {
        map.set(c, (map.get(c) || 0) + 1);
    }
    let res = 0;
    while (true) {
        for (const c of 'balloon') {
            if (map.get(c) === 0 || map.get(c) === undefined) return res;
            map.set(c, (map.get(c) || 0) - 1);
        }
        res++;
    }
};
// @lc code=end
