// 原始类型一定不能添加属性和方法, 属性和方法是对象独有的

// var num = 123  // v8 引擎在执行阶段 直接 new Number(123)
// num.a = 'aaa'
// delete num.a
// console.log(num.a);  //undefined

// var num = new Number(123)
// num.a = 'aaa'
// console.log(num + 1); //124
// console.log(num);



// var str = 'hello' // new String('hello')
// console.log(str.length); //length 属性继承其它



// 考点
var arr = [1,2,3,4,5]
arr.length = 3
console.log(arr);


var str = 'hello' // let str = new String('hello')
str.length = 2
// delete str.length  // 执行读到这里被 v8 删除掉了
console.log(str.length);
