/**
 * @param {number} x
 * @return {number}
 */
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