/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 2) {
        return null;
    }
    for (let i1 = 0; i1 < nums.length; i1++) {
        for (let i2 = i1 + 1; i2 < nums.length; i2++) {
            if (nums[i1] + nums[i2] == target) {
                return [i1, i2];
            }
        }
    }
    return null;
};