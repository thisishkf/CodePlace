/**
 * Runtime: 144 ms, faster than 50.09% of JavaScript online submissions for Median of Two Sorted Arrays.
 * Memory Usage: 40 MB, less than 19.76% of JavaScript online submissions for Median of Two Sorted Arrays.
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2].sort(function(a,b){
        return a-b
    });
    let size = arr.length;
    if(size %2 == 1){
        return arr[Math.floor(size/2)];
    } else{
        return ( arr[Math.floor(size/2)] + arr[Math.floor(size/2)-1])/2
    } 
};