// 5! === 5 * 4 * 3 * 2 * 1
function mul(n) {

    // let num = 1
    // for(let i = n; i >= 1; i--) {
    //     num *= i
    // }
    // return num

    // for(let i = n - 1;i >= 1; i--) {
    //     n *= i
    // }
    // return n
    
    if(n === 1)
        return 1
    return  n * mul(n - 1)
}

console.log(mul(5));