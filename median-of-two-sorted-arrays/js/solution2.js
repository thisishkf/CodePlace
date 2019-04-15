/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let totalSize = nums1.length + nums2.length

    let medianPosition = Math.floor(totalSize / 2);
    let arr = [];
    let i1 = 0, i2 = 0;

    if (nums1.length < 0) {
        arr = nums2
    } else if (nums2.length < 0) {
        arr = nums1
    } else {
        for (let c = 0; c <= medianPosition; c++) {
            if (nums1[i1] < nums2[i2]) {
                arr.push(nums1[i1++])
            } else {
                arr.push(nums2[i2++])
            }
        }
    }
    console.log(arr)
    if (medianPosition % 2 == 1) {
        return arr.slice(-1)
    } else {

        let tmp = 0;
        let counter = (medianPosition > 1) ? 2 : 1
        arr.slice(-counter).forEach(ele => {
            tmp += ele;
        })

        return tmp / counter
    }
};