/*
 * @lc app=leetcode.cn id=203 lang=typescript
 *
 * [203] 移除链表元素
 *
 * https://leetcode.cn/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (57.21%)
 * Likes:    1460
 * Dislikes: 0
 * Total Accepted:    787.9K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 *
 *
 * 示例 1：
 *
 *
 * 输入：head = [1,2,6,3,4,5,6], val = 6
 * 输出：[1,2,3,4,5]
 *
 *
 * 示例 2：
 *
 *
 * 输入：head = [], val = 1
 * 输出：[]
 *
 *
 * 示例 3：
 *
 *
 * 输入：head = [7,7,7,7], val = 7
 * 输出：[]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 列表中的节点数目在范围 [0, 10^4] 内
 * 1
 * 0
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let headStore = head;
  let prev: ListNode | null = null;
  let current = head;
  while (current) {
    if (current.val === val) {
      if (prev) {
        prev.next = current.next;
      } else {
        headStore = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }
  return headStore;
};
// @lc code=end
