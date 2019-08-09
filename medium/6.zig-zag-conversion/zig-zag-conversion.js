/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    const zArray = new Array(numRows).fill('')
    const str = s.split('')
    let cur = 0
    let goingDown = true
    while(str.length) {
        zArray[cur] += str.shift()
        cur += goingDown ? 1 : -1
        if (cur + 1 >= numRows || cur - 1 < 0) goingDown = !goingDown
    }
    return zArray.join('')
};