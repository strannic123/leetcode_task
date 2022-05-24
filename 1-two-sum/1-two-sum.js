/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = target - nums[i] 
        if(map.has(num1)) {
            console.log(map.get(num1), i )
            return [map.get(num1), i ]
        } else {
            map.set(nums[i], i)
        }
    }
};