/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numMap = new Map();
    for (let i in nums) {
        if (numMap.has(nums[i])) {
            return [numMap.get(nums[i]), i];
        } else {
            numMap.set(target - nums[i], i);
        }
    }
};