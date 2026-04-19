// 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

// 示例 1：

// 输入：nums = [5,7,7,8,8,10], target = 8
// 输出：[3,4]
// 示例 2：

// 输入：nums = [5,7,7,8,8,10], target = 6
// 输出：[-1,-1]
// 示例 3：

// 输入：nums = [], target = 0
// 输出：[-1,-1]
 

// 提示：

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums 是一个非递减数组
// -109 <= target <= 109




/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftF = (nums, target) => {
        let left = 0
        let right = nums.length - 1
        let a = -2
        while(left <= right) {
            let middle = left + ((right - left) >> 1)
            if(target <= nums[middle]) {
                right = middle - 1 
                a = right
            }else {
                left = middle + 1
            }
        }
        return a
    }
    const rightF = (nums, target) => {
        let left = 0
        let right = nums.length - 1
        let b = -2
        while(left <= right) {
            let middle = left + ((right - left) >> 1)
            if(target >= nums[middle]) {            
                left = middle + 1
                b = left
            }else {
                right = middle - 1
            }
        }
        return b
    }
    const l = leftF(nums, target)
    const r = rightF(nums,target)

    if(l === -2 || r === -2)  return [-1,-1]
    if(r - l > 1)  return [l + 1,r - 1]
    return [-1,-1]    
};