/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var j = nums.length - 1;
    // if (!!nums.length) {
    //     return 0;
    // } else {
    var i;
    for (i = 0; i < j; i++) {
        if (nums[i] === val) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;

            j -= 1;
            i -= 1;
        }
    }
    console.log(i-1);
    return i - 1;
    // }
};
// @lc code=end

