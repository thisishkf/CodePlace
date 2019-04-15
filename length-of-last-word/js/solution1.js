/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    if (s == ' ') {
        return 0;
    }
    if (s.indexOf(' ') < 0) {
        return s.length
    }
    return s.trim().split(' ').slice(-1)[0].length
};