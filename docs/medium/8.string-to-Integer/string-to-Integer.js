/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const MAX_NUM = 214748364
    const INT_MAX = Math.pow(2, 31) - 1
    const INT_MIN = -Math.pow(2, 31)
    const TD_LEN = 9
    let isPositive
    let result = 0
    let hasBegun = false
    const reg = /\d/
    for (let i = 0; i < str.length; i++) {
        const cur = str.charAt(i)
        if (cur === ' ') {
            if (hasBegun) break
            continue
        }
        if ((cur === '+' || cur === '-') && isPositive === undefined && !hasBegun) {
            isPositive = cur === '+'
            hasBegun = true
            continue
        }
        if (!reg.test(cur)) {
            break
        } else {
            if (result > MAX_NUM) {
                return (isPositive || isPositive === undefined) ? INT_MAX : INT_MIN
            } else if (result === MAX_NUM) {
                if ((isPositive || isPositive === undefined) && +cur > 7) return INT_MAX
                if (!isPositive && +cur === 9) return INT_MIN
            }
            hasBegun = true
            result = result * 10 + +cur
        }
    }
    return (isPositive || isPositive === undefined) ? +result : -result
};