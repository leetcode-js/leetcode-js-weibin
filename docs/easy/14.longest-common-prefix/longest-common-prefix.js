/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ''
    let maxPrefix = strs[0]
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(maxPrefix) !== 0) {
            maxPrefix = maxPrefix.substring(0, maxPrefix.length - 1)
            if (maxPrefix === '') return ''
        }
    }
    return maxPrefix
};