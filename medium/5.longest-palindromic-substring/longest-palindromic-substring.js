/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function expandFromCenter(s, left, right) {
        while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
            --left
            ++right
        }
        return right - left - 1
    }
    let start = 0
    let end = 0
    for(let i = 0; i < s.length; i++) {
        let len1 = expandFromCenter(s, i, i)
        let len2 = expandFromCenter(s, i, i + 1)
        let len = Math.max(len1, len2)
        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }
    }
    return s.slice(start, end + 1)
};