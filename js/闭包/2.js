// function foo() {
//     foo()
// }

// foo()
// // 报错：RangeError: Maximum call stack size exceeded
// // 原因：foo()调用了自身，但是没有出口，所以会一直调用，直到栈溢出


// var a = 2
// function add() {
//     var b = 10
//     return a + b 
// }
// add()


// function a() {
//     function b() {
//         function c() {
//             // ...
//         }
//         c()
//     }
//     b()
// }
// a()

//递归   ---> 可以改为循环    ---> 尾递归(动态规划)
function runStack(n) {
    if (n === 0) return 100
    return runStack(n - 2)
}
runStack(50000)
