/**
 * @param {number} x
 * @return {boolean}
 */
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