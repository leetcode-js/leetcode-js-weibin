### 删除排序链表中的重复元素 II

### 题目

https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/submissions/

### 题解

#### 递归法

这里插播一句，我发现链表的题目似乎用递归法比较容易，循环法往往会涉及更复杂的指针操作。

这题的关键点在于：

1. 如何判断结束点？---head 为空或者head.next为空。因为这意味着肯定不会重复
2. 如果遇到重复值，需要把这值全部删除，这并不是普通的去重
3. 每次递归的返回值分为两种，一种是返回head，另一种是返回函数调用
   - 前者代表当前这个节点仍然在，后者代表当前节点已被删除

```js
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
```