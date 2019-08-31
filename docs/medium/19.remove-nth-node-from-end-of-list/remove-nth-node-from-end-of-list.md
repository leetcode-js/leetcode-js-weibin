### 删除链表的倒数第N个节点

### 题目

https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

### 题解

有两种办法：

#### 两次遍历

很容易想到，首先我们需要知道整个链表的长度，这样就能知道我们要删掉哪一个。

具体的，要注意我们需要一个哑结点作为辅助，该结点位于列表头部。哑结点用来简化某些极端情况，例如
列表中只含有一个结点，或需要删除列表的头部。

```js
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
```

#### 一次遍历

其实我们不需要知道总长度，也可以知道哪里是倒数第n个节点。此时我们需要两个指针，保持两个指针之间的间隔是n，那么当第二个指针到达最后一个节点的时候
第一个指针就指向了待删除节点的上一个节点。接下去就很简单了。

需要注意，我们同样是需要哑节点的辅助。

```js
　var removeNthFromEnd = function(head, n) {
     let dummyFirst = new ListNode(0)
     let dummySecond = new ListNode(0)
     dummyFirst.next = head
     dummySecond.next = head
     let first = dummySecond
     let sp = 0
     while (sp <= n) {
         dummyFirst = dummyFirst.next
         sp++
     }
     
     while(dummyFirst) {
         dummyFirst = dummyFirst.next
         dummySecond = dummySecond.next
     }
     
     dummySecond.next = dummySecond.next.next
     
     return first.next
 };
```