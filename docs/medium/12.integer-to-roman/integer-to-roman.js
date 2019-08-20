/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    function repeatChar(char, times) {
        return new Array(times).fill(char).join('')
    }
    const numArr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
    const romanArr = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']
    let result = ''
    for (let i = romanArr.length - 1; i >=0; i--) {
        let a = Math.floor(num / numArr[i])
        if (a === 0) continue
        result += repeatChar(romanArr[i], a)
        num -= a * numArr[i]
    }
    return result
};