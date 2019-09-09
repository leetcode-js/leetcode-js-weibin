/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let before = new ListNode(0)
    let after = new ListNode(0)
    let beforeCursor = before
    let afterCursor = after

    while(head != null) {
        if (head.val < x) {
            beforeCursor.next = head
            beforeCursor = beforeCursor.next
        } else {
            afterCursor.next = head
            afterCursor = afterCursor.next
        }
        head = head.next
    }
    beforeCursor.next = after.next
    afterCursor.next = null
    return before.next
};