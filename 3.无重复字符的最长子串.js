/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length == 0) {
        return 0;
    }
    var maxLength = 0, beginInex = 0, currentIndex = 0;
    var strMap = new Map();

    while(currentIndex < s.length) {
        const char = s.charAt(currentIndex);
        const repeatedCharIndex = strMap.get(char);
        if (repeatedCharIndex != undefined) {
            const length = currentIndex - beginInex;
            if(length > maxLength) {
                maxLength = length;
            }
            while(beginInex < repeatedCharIndex + 1) {
                strMap.delete(s[beginInex]);
                beginInex++;
            }
        }
        strMap.set(char, currentIndex);
        currentIndex++;
    }
    const length = currentIndex - beginInex;
    if (length > maxLength) {
        maxLength = length;
    }
  
    return maxLength
};
// @lc code=end

