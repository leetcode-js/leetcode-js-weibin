/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    const resultArr = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) return resultArr
        if (i > 0 && nums[i] === nums[i-1]) continue
        let m = i + 1, n = nums.length - 1
        while (m < n) {
            const sum = nums[m] + nums[n] + nums[i]
            if (sum > 0) n--
            if (sum < 0) m++
            if (sum === 0) {
                resultArr.push([nums[i], nums[m], nums[n]])
                while (m < n && nums[m] === nums[m+1]) m++
                while (m < n && nums[n] === nums[n-1]) n--
                n--
                m++
            }
        }

    }
    return resultArr
};