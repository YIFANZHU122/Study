// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案，并且你不能使用两次相同的元素。

// 你可以按任意顺序返回答案。


// let nums = [2,7,11,15], target = 9; 

// var twoSum = function(nums, target) { 
//     for(let i = 0; i < nums.length; i++){ 
//         let item = target - nums[i];
//         let j = nums.indexOf(item);
//         if(j !== -1 && j !== i){
//             return [i, j];
//         }
//     }
// }; 

// console.log(twoSum(nums, target));


let nums = [2,7,11,15], target = 9; 

var twoSum = function(nums, target) { //用空间换时间
    let diffs = {}
    for(let i = 0; i < nums.length; i++){ 
        let item = target - nums[i];
        //去 diffs 中找是否有这个值，有就返回，没有就把这个值存起来
        if(diffs[item]!== undefined){
            return [diffs[item], i];
        }
        diffs[diffs[i]] = i;
    }
}; 

console.log(twoSum(nums, target));