/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(target < nums.slice(0,1)){
        return 0;
    }

    if(target > nums.slice(-1)){
        return nums.length;
    }
    
    let hasT = nums.indexOf(target);
    if (hasT > -1){
        return hasT;
    }
    
    let arr = [...nums, target].sort(function(a,b){
        return parseInt(a) > parseInt(b)
    })
    return arr.indexOf(target)
};