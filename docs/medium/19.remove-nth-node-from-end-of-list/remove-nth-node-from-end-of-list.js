/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let cursor = head
    let len = 0
    while(cursor) {
        cursor = cursor.next
        len++
    }
    cursor = dummy
    let cur = 0
    while (cur < len - n) {
        cursor = cursor.next
        cur++
    }
    cursor.next = cursor.next.next
    return dummy.next

};