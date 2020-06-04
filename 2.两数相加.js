/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let val = l1.val + l2.val;
    let beginNode = new ListNode(val % 10);
    let carrying = parseInt(val / 10);
    let l1Next = l1.next;
    let l2Next = l2.next;
    
    let lastNode = beginNode;

    while(l1Next || l2Next) {
        val = 0;
        if (l1Next) {
            val += l1Next.val;
            l1Next = l1Next.next;
        }
        if (l2Next) {
            val += l2Next.val;
            l2Next = l2Next.next;
        }

        val += carrying;
        lastNode.next = new ListNode(val % 10);;
        lastNode = lastNode.next;

        carrying = parseInt(val / 10);
    }

    if (val >= 10) {
        let next = new ListNode(1);
        lastNode.next = next;
    }

    return beginNode;
};
// @lc code=end

