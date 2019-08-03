/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let curArr = []
    let result = []
    const input = s.split('')
    const len = input.length
    for (let i = 0; i < len; i++) {
        const index = curArr.indexOf(input[i])
        if (index !== -1) {
            result.push(curArr.length)
            curArr = curArr.slice(index + 1, curArr.length)
        }
        curArr.push(input[i])
    }
    result.push(curArr.length)
    return result.length ? Math.max(...result) : 0
};