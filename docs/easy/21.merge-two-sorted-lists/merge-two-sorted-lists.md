### 并两个有序链表

### 题目

https://leetcode-cn.com/problems/merge-two-sorted-lists/

### 题解

思路很简单，主要用于熟悉一下链表的操作

有两种解法，一种是使用递归的方式：

> 两个链表头部较小的一个与剩下元素的 merge 操作结果合并。

直接上代码

```js
var mergeTwoLists = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (l1.val <= l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    } else {
        l2.next = mergeTwoLists(l1, l2.next)
        return l2
    }
};
```

第二个思路就是比较符合直觉，其实就是不断比较，将较大的一个接到较小的一个后面

```js
var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode(-1)
    let head = dummy
    while(l1 && l2) {
        if (l1.val <= l2.val) {
            head.next = l1
            l1 = l1.next
        } else {
            head.next = l2
            l2 = l2.next
        }
        head = head.next
    }
    head.next = l1 ? l1 : l2
    return dummy.next
};
```