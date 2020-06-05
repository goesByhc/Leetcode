/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function(s) {
    var maxStr, charCodeLeft, charCodeRight, maxLength = -1;
    maxStr = s.length >= 1 ? s.charAt(0): "";

    var findStrByBase = function (s, left, right) {
        while(true) {
            if (left >= 0 && right < s.length) {
                charCodeLeft = s.charAt(left);
                charCodeRight = s.charAt(right);
                if (charCodeLeft !== charCodeRight){
                    if (right - left - 1 > maxLength){
                        maxLength = right - left - 1;
                        maxStr = s.slice(left + 1, left + 1 + maxLength);
                        break;
                    } else {
                        break;
                    }
                } 
                left--;
                right++;
            } else if (right - left - 1 > maxLength){
                maxLength = right - left - 1;
                maxStr = s.slice(left + 1, left + 1 + maxLength);
                break;
            } else {
                break;
            }
        }
    }

    for(let i = 0; i < s.length; i ++) {
        findStrByBase(s, i , i + 1);
        findStrByBase(s, i - 1, i + 1);
    }
    return maxStr;
};


// console.log(longestPalindrome("cbbd"));

// @lc code=end

