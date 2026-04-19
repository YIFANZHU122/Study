let a = 1  //同步代码

setTimeout(() => { // 异步代码
    a = 2
    console.log(a)
},1000)

console.log(a);


