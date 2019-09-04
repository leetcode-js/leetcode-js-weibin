### 两两交换链表中的节点

### 题目

https://leetcode-cn.com/problems/swap-nodes-in-pairs/

### 题解

此题适合使用递归的思想来思考。

#### 递归法

最基本的单元即0个、1个、2个节点的情况。0个和1个直接返回，此为递归的终止条件。2个节点时，要交换这两个节点，只需要tail指向
head，head指向下一个单元，然后返回tail。

```js
var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head
    }
    const next = head.next
    head.next = swapPairs(head.next.next)
    next.next = head
    return next
};
```

#### 遍历法

遍历法的思路比较符合直觉，但是很考察指针的使用。

首先为了处理边界情况，我们都需要建立一个dummy节点，放在最前面。如果后面只有一个或0个节点，就结束遍历。

这里有一点需要注意的就是，每一次遍历需要操作的不只有两个节点，而是三个，它还包括上一个遍历的后节点。这决定着两次遍历之间
的连接。因此我们需要有一个临时节点temp，用来保存上一次遍历的后节点。


```js
var swapPairs = function(head) {
    let pre = new ListNode(-1)
    pre.next = head
    let temp = pre
    while(temp.next != null && temp.next.next != null) {
        let start = temp.next
        let end = temp.next.next
        temp.next = end
        start.next = end.next
        end.next = start
        temp = start   
    }
    return pre.next
};
```