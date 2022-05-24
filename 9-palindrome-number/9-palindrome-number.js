/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = Number(String(x).split('').reverse().join(''))
    return num === x
};