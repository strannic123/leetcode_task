/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let low = 0
    let hight = nums.length
    let mid = Math.floor((hight + low) /2);

    while (low <= hight) {
       if(nums[mid] === target) {
            return mid
        }else if(nums[mid] > target) {
            hight = mid - 1
        } else {
            low = mid +1
        }
        mid = Math.floor((hight + low) /2)
    }

    if(target > nums[nums.length - 1])
        return nums.length;
    else if(target < nums[0])
        return 0;
    else if(target > nums[mid])
        return mid + 1;
    else if(target < nums[mid])
        return mid - 1;
};