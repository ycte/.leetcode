/*
 * @lc app=leetcode.cn id=762 lang=typescript
 *
 * [762] 二进制表示中质数个计算置位
 *
 * https://leetcode.cn/problems/prime-number-of-set-bits-in-binary-representation/description/
 *
 * algorithms
 * Easy (75.42%)
 * Likes:    147
 * Dislikes: 0
 * Total Accepted:    61.6K
 * Total Submissions: 81.6K
 * Testcase Example:  '6\n10'
 *
 * 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。
 *
 * 计算置位位数 就是二进制表示中 1 的个数。
 *
 *
 * 例如， 21 的二进制表示 10101 有 3 个计算置位。
 *
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：left = 6, right = 10
 * 输出：4
 * 解释：
 * 6 -> 110 (2 个计算置位，2 是质数)
 * 7 -> 111 (3 个计算置位，3 是质数)
 * 9 -> 1001 (2 个计算置位，2 是质数)
 * 10-> 1010 (2 个计算置位，2 是质数)
 * 共计 4 个计算置位为质数的数字。
 *
 *
 * 示例 2：
 *
 *
 * 输入：left = 10, right = 15
 * 输出：5
 * 解释：
 * 10 -> 1010 (2 个计算置位, 2 是质数)
 * 11 -> 1011 (3 个计算置位, 3 是质数)
 * 12 -> 1100 (2 个计算置位, 2 是质数)
 * 13 -> 1101 (3 个计算置位, 3 是质数)
 * 14 -> 1110 (3 个计算置位, 3 是质数)
 * 15 -> 1111 (4 个计算置位, 4 不是质数)
 * 共计 5 个计算置位为质数的数字。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= left <= right <= 10^6
 * 0 <= right - left <= 10^4
 *
 *
 */

// @lc code=start
function countBits(n: number): number {
    let count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}

function isPrime(num: number): boolean {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function countPrimeSetBits(left: number, right: number): number {
    let count = 0;
    for (let i = left; i <= right; i++) {
        if (isPrime(countBits(i))) {
            count++;
        }
    }
    return count;
};
// @lc code=end
