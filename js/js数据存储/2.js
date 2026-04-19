let obj = {  //Object
    name: '张三',
    full: 100,
    birthady:function() {
        console.log('我会喝');
        this.full++
    },
    eat:function() {
        console.log('我会吃');
        obj.full--
    }
}

// // obj.gf = '222'  可以增加对象属性

// let mg = 'my'
// obj.mg = '333'  //这里mg 是字符串
// // obj[mg] = '222'  这样可以

// delete obj.eat

// console.log(obj);




let obj2 = new Object({
    name:'111',
    age:22
})

console.log(obj2);

