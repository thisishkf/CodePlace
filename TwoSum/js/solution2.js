/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 2) {
        return null;
    }
    let numMap = new Map();
    for (let i in nums) {
        if (numMap.has(nums[i])) {
            return [numMap.get(nums[i]), i];
        } else {
            numMap.set(target - nums[i], i);
        }
    }
    return null;
};