// 给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回 滑动窗口中的最大值 。

 

// 示例 1：

// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7
// 示例 2：

// 输入：nums = [1], k = 1
// 输出：[1]
 

// 提示：

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104
// 1 <= k <= nums.length

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//     const len = nums.length
//     let left = 0
//     let right = k -1
//     const res = []
//     while(right <= len) {
//         let max = getMax(nums,left,right)
//         res.push(max)
//         left++
//         right++
//     }
//     return res
// };

// function getMax(nums,left,right) {
//     let max = -Infinity
//     for(let i = left;i<=right -1;i++) {
//         max = Math.max(max,nums[i])
//     }
//     return max
// }




var maxSlidingWindow = function(nums, k) {

    // 维护一个长度不超过窗口长度的单调递减的队列
    const len = nums.length
    const res = []
    const queue = [] //单调递减的队列
    for(let i = 0;i< len;i++) {
        while(queue.length && nums[i] >= nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(i)
        // 当i - k + 1 > queue[0] 时，说明当前窗口的最大值已经不在队列中了，需要将队列的第一个元素弹出
        if(i - k + 1 > queue[0]) {
            queue.shift()
        }
        // 某个时候开始求最大值
        if(i >= k - 1) {
            res.push(nums[queue[0]])
        }
    }
    return res
};