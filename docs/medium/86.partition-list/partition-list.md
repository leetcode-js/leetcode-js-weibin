### 分隔链表

### 题目

https://leetcode-cn.com/problems/partition-list/

### 题解

#### 双指针法

本题的思路很简单，遍历链表，小于的归一条链，大于等于的归另一条链，最后将两条链组合起来即可。

关键点有以下几点：

1. 需要先创建两个哑指针，这方便我们处理链表为空的情况。这是链表遍历的基本操作
2. 最后需要添加上null作为尾部，afterCursor.next = null，否则提交的时候因为程序无法判断链表是否已经结束，会报heap out of memory的错。

```js
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
```