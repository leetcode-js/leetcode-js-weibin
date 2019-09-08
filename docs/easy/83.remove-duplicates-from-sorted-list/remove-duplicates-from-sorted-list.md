### 删除排序链表中的重复元素

### 题目

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/

### 题解

#### 递归法

插播一句，递归法真香。

此题是82的简单版，区别在于不需要将出现重复的节点去掉，而只是普通的去重。

```js
var deleteDuplicates = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    head.next = deleteDuplicates(head.next)
    return head.val === head.next.val ? head.next : head
};
```