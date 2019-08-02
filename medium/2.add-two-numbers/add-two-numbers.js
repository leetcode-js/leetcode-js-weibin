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
const addTwoNumbers = function(l1, l2) {
    const result = new ListNode(0)
    let curr = result // 关键一步，走的是curr，result的指针不能动，否则别人无法遍历
    let p = l1
    let q = l2
    let carry = 0
    while(p !== null || q !== null) {
        const x = p !== null ? p.val : 0
        const y = q !== null ? q.val : 0
        const add = x + y + carry
        carry = parseInt(add / 10)
        curr.next = new ListNode(add % 10)
        curr = curr.next
        if (p !== null) p = p.next
        if (q !== null) q = q.next
    }

    if (carry > 0) {
        curr.next = new ListNode(carry)
    }

    return result.next
}