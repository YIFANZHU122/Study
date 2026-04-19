var obj = {  //对象
    a: 1,
    b: 2,
    c: 3
}

// console.log(obj.a)
// console.log(obj['b'])  //[]中可以写变量


// obj.a = obj.a + 1


// with(obj) { //批量修改对象属性
//     a = a + 1
//     b = b + 1
//     c = c + 1
// }


var o1 = {
    a: 1
}

var o2 = {
    b: 2
}

function foo(obj) {
    with(obj) {
        a = 2
    }
}

foo(o2)
console.log(o2)
console.log(a)