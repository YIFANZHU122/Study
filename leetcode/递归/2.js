// 1 1 2 3 5 8 13 21
let a = 1
let b = 1

function fib(n) {
    if(n < 3) {
        return 1
    }      
    return  fib(n - 1) + fib(n - 2)
}
console.log(fib(10))