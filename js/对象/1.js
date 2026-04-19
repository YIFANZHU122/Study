// const obj = {  //创建了一个对象字面量
//     name:'张三',
//     age:18
// }

// console.log(obj.age);
// console.log(obj['age']);
// obj.sex='男'  // 新增
// obj.age = 19 // 修改

// delete obj.age // 删除



var obj = { }  // 字面量 
// 构造函数 Object
var obj2 = new Object()
// 自定义构造函数
var obj3 = new Person()

function Person(){
    this.name = '张三'
}


console.log(obj,obj2);

