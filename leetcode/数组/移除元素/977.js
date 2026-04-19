// 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

 

// 示例 1：

// 输入：nums = [-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 解释：平方后，数组变为 [16,1,0,9,100]
// 排序后，数组变为 [0,1,9,16,100]
// 示例 2：

// 输入：nums = [-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
 

// 提示：

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums 已按 非递减顺序 排序


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let a = []
    let mi = -1
    let n =nums.length

    // for(let i of nums) {
    //     a.push(i * i)
    // }
    // a.sort((a,b) => a - b)
    // return a

    for(let i = 0;i < n;i++) {
        if(nums[i] < 0) {
            mi = i
        }else
            break
    }

    let i =mi,j = mi + 1
    while(i >= 0 || j < n){
        if(i < 0) {
            a.push(nums[j]*nums[j])
            j++
        }else if(j === n) {
            a.push(nums[i]*nums[i])
            i--
        }else if(nums[i]*nums[i] >= nums[j]*nums[j]){
            a.push(nums[j]*nums[j])
            j++
        }else if(nums[i]*nums[i] < nums[j]*nums[j]){
            a.push(nums[i]*nums[i])
            i--
        }
    }

    return a
};  