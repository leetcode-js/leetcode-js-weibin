/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let cursor = new ListNode(0)
    cursor.next = head
    let len = 0
    while(cursor.next) {
        cursor = cursor.next
        len++
    }
    const step = len - (k % len)
    cursor.next = head
    let i = 0
    while(i < step) {
        cursor = cursor.next
        i++
    }
    let first = cursor.next
    cursor.next = null
    return first
};