// var a = 1;


// function add(x,y){
//     return x + y;
// }

// console.log(add(1,2))

// var a = 10;

// if(a > 10){

// }

// var str = '123'; // 字符串类型
// for(var i = 0; i < str.length; i++){ // 字符串可以被遍历 i++ === i = i + 1
//     console.log(str[i]); // 1 2 3
// }

// var num = 123; // 数字类型
// var bool = true; // 布尔类型
// var obj = {name:'zhangsan'}; // 对象类型
// var arr = [1,2,3]; // 数组类型
// var fun = function(){console.log('hello')}; // 函数类型
// var undef = undefined; // 未定义类型
// var nul = null; // 空类型
// var sym = Symbol('123'); // 符号类型
// var bigint = 123n; // 大整数类型


//数据结构：按照某一固定的规则来存储数据
// var arr = [1,2,3,4,5,'hello']; // 数组类型

// console.log(arr[0]); // 1  索引 || 下标

// arr.unshift('world '); // 往数组的开头添加元素  时间复杂度 O(n)
// arr.shift(); // 从数组的开头删除元素  时间复杂度 O(n)

// arr.push('world'); // 往数组的末尾添加元素  时间复杂度 O(1)
// arr.pop(); // 从数组的末尾删除元素  时间复杂度 O(1)

// arr.splice(0,0,'world'); // 往数组的指定位置添加元素  时间复杂度 O(n)
// arr.splice(0,1,'world'); // 从数组的指定位置删除元素  时间复杂度 O(n)

// var arr = [1,2,3,4,5,'hello']; // 数组类型  时间复杂度 O(1)  空间复杂度 O(n)  线性表

// for(let i = 0; i < arr.length; i++){ // 时间复杂度 O(n)  空间复杂度 O(1)  线性表
//     console.log(arr[i]); // 1 2 3 4 5 hello
//     arr[i] = arr[i] +1;
//     console.log(arr[i]); // 2 3 4 5 6 hello
   
// }

// let nums = [2,7,11,15]; target = 9; 

// var twoSum = function(nums, target) { // 时间复杂度 O(n^2)  空间复杂度 O(1)  暴力解法
//     for(let i = 0; i < nums.length; i++){ // 时间复杂度 O(n)  空间复杂度 O(1)  线性表
//         for(let j = i + 1; j < nums.length; j++){ // 时间复杂度 O(n)  空间复杂度 O(1)  线性表
//             if(nums[i] + nums[j] === target){ // 时间复杂度 O(1)  空间复杂度 O(1)  线性表
//                 return [i,j]; // 时间复杂度 O(1)  空间复杂度 O(1)  线性表
//             }
//         }
//     }
// }; // 时间复杂度 O(n^2)  空间复杂度 O(1)  暴力解法

// console.log(twoSum(nums, target)); // [0,1]


// var arr = ['a','b','c'];

// console.log(arr.indexOf('a')); // 0

var obj = {  //key:value 键值对  哈希表
            name:'zhangsan', // key:value 键值对  哈希表
            age:18 // key:value 键值对  哈希表
          }; 

console.log(obj.name); // zhangsan
console.log(obj.sex)  //undefined