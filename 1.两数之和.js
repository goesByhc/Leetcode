/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let temp = [];
    let length = nums.length;
    for(let i = 0; i < length; i ++) {
        let current = nums[i];
        let diff = target - current;

        if (temp[diff] == undefined) {
            temp[current] = i;
        } else {
            return [i, temp[diff]];
        }
    }
};
// @lc code=end

