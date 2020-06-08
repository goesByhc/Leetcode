/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {

    let max = Math.pow(2, 31)

    if (x > max || x < - max) {
        return 0;
    }

    let result = 0
    let isPositive = x >= 0;
    x = Math.abs(x);

    while(x !== 0) {
        result *= 10
        result += x % 10
        x = x / 10 | 0
    }

    if (!isPositive) {
        result = -result;
    }

    if (result > max || result < - max) {
        return 0;
    }

    return result;

};

// console.log(reverse(123));
// @lc code=end

