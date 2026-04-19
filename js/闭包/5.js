// var arr = []  // 5个函数体
// for(var i = 1; i <= 5; i++) {  //var i  -> let i => 1 2 3 4 5
//     //function for(j) {
//     arr.push(function() {
//         console.log(i); // 6 6 6 6 6 
//     })
//     //}
//     //foo(j)
// }

// //run
// for(var j = 0; j < arr.length; j++) {
//     arr[j]()
// }

var arr = []
for(var i = 1; i <= 5; i++) {
    (function(){
        arr.push(function(){  //被拿到 foo 外面
            console.log(i);
        })
    })(i)
}

for(var j = 0; j < arr.length; j++) {
    arr[j]()
}

//当一个函数 A 内部存在一个函数 B,这个 B 被 return 到 A 外面,这个时候,函数 A 就形成了一个闭包
//除了 return 以外,还有什么情况会形成闭包呢?
//1. 函数 A 被定时器调用
//2. 函数 A 被事件绑定调用
//3. 函数 A 被自执行调用
//4. 函数 A 被其他函数调用

//除了 return 以外,还有什么情况可以将内部函数移到外部使用呢?
//赋值外面的变量,存到全局数组,存到全局的对象的属性,挂到全局的 window 上