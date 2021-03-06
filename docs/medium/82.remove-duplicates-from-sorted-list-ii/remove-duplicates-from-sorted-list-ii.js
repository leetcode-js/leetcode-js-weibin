/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    if (head.val === head.next.val) {
        const val = head.val
        while (head && head.val === val) {
            head = head.next
        }
        return deleteDuplicates(head)
    } else {
        head.next = deleteDuplicates(head.next)
    }
    return head

};