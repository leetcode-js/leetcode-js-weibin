### 两数之和

### 题目

https://leetcode-cn.com/problems/two-sum/

### 题解

### 暴力法
最简单的方法就是两层循环，找到`nums[i] + nums[j] === target`。

这种方法，由于有两层循环，所以时间复杂度是O(N^2), 不需要额外空间，所以空间复杂度为O(1)。
```JS
var twoSum = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
};
```
### 哈希表法

还有一种办法是通过使用哈希表，来减少查找的次数。分两次（而非两层）循环，第一次先构造出哈希表，第二次再查找出来。

```JS
var twoSum = function(nums, target) {
    var map = new Map()
    // 构造哈希表
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    
    for (var j = 0; j < nums.length; j++) {
        var complement = target - nums[j]
        if (map.has(complement) && map.get(complement) !== j) {
            return [j, map.get(complement)]
        }
    }
}
```