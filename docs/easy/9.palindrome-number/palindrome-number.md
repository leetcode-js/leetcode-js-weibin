### 回文数

### 题目

https://leetcode-cn.com/problems/palindrome-number/

### 题解

思路很简单，把数字转成字符串，然后根据字符串的长度选取一个中点开始向两边
遍历，对比两个数字是否一样。如果直到遍历完成都一样，则证明是回文数。

```js
var isPalindrome = function(x) {
    const str = x + ''
    const startPoint = str.length % 2 === 0 ? str.length / 2 - 1 : Math.floor(str.length / 2) - 1
    for (let i = startPoint; i >= 0; i--) {
        const c1 = str.charAt(i)
        const c2 = str.charAt(str.length - 1 - i)
        if (c1 !== c2) return false
    }
    return true
};
```

简单题，不过仍然有两个地方可以优化：

1. 代码能不能高级一些？
2. 能不能不转成字符串？