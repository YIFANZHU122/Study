// function add(a, b) {
//     return a + b;
// }

// add(1,2)

// function Person(weight){
//     this.name = '张三'
//     this.age = 18
//     this.sex = '男'
//     this.weight = weight
// }

// var p1 = new Person('70')  // 实例化一个对象
// var p2 = new Person('80')

// p1.name = '张含'

// console.log(p1);

// console.log(p2);


// function Person(name, age, sex, weight){
//     this.name = name
//     this.age = age
//     this.sex = sex
//     this.weight = weight
// }

// var p1 = new Person('张三', 18, '男', 70)
// var p2 = new Person('李四', 19, '女', 80)

// console.log(p1);
// console.log(p2);

function Person(name, age, sex, weight){
    var _this = {}
    _this.name = name
    _this.age = age
    _this.sex = sex
    _this.weight = weight
    return _this
}

var p1 =  Person('张三', 18, '男', 70)
var p2 =  Person('李四', 19, '女', 80)

console.log(p1);
console.log(p2);
