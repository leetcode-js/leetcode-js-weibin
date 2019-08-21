### 整数反转

### 题目

https://leetcode-cn.com/problems/reverse-integer/

### 题解

本题目分两部分：

1. 判断溢出
2. 通过数学运算实现'pop'与'push'

关于如何判断溢出，我们以最大值为例。我们知道最大值`2^31 - 1`，即`2147483647`。因此如果一个数的前几位
大于`214748364`，那么不管这个数的个位是什么数，它必然会溢出。相反，如果小于`214748364`，那么不管个位是什么
也必然不会溢出。最后，如果等于`214748364`，那么只有当个位数小于或等于7时，才不会溢出。

负数同理。

因此关于溢出的部分可以写成：
```js
function isOverflow(num) {
    if (num > ( parseInt(MAX_NUM / 10)) || num < (parseInt(MIN_NUM / 10))) {
        return true
    } else {
        return false
    }
}
```

关于通过数学运算实现数字的'pop'与'push'（十进制）。我们知道：

- 通过`num % 10`，可以获取到num的个位。
- 通过`num = Math,floor(num / 10)`，可以将num设置为pop出原有个位之后的数字。
- 通过`num = num * 10 + pushNum`，可以将一个数push进去。

完整的代码如下：
```js
var reverse = function(x) {
    const MAX_NUM = Math.pow(2, 31) - 1
    const MIN_NUM = -Math.pow(2, 31)
    function isOverflow(num) {
        if (num > ( parseInt(MAX_NUM / 10))|| num < (parseInt(MIN_NUM / 10))) {
            return true
        } else {
            return false
        }
    }
    let result = 0
    while(x) {
        let pop = x % 10
        x = parseInt(x / 10)
        if (isOverflow(result)) {
            return 0
        }
        result =  result * 10 + pop
    }
    return result
};
```