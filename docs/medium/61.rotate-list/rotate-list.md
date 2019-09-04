### 旋转链表

### 题目

https://leetcode-cn.com/problems/rotate-list/

### 题解

一开始没有考虑步数超过链表长度的情况。其实要解决这个问题，主要就是两步：

1. 第一步，组成环形链表。这能解决步数超过链表长度的情况
2. 第二部，找出相应位置断开这个环

```js
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
```