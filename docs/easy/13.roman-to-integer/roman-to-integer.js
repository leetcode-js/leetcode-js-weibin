/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    let pre = ''
    let result = 0
    for (let i = 0; i < s.length; i++) {
        const cur = s.charAt(i)
        if (pre === '' || roman[pre] >= roman[cur]) {
            result = result + roman[cur]
        }
        if (pre !== '' && roman[pre] < roman[cur]) {
            result = result + roman[cur] - roman[pre] * 2
        }
        pre = cur
    }
    return result
};