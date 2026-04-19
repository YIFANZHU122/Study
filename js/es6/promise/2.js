function xq() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('1')
            resolve() // 成功状态
            //reject() // 失败状态
        },1000)
    })
}
function m() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('2')
            resolve()
        }, 2000);
        
    })
    
}

function b() {
    setTimeout(() => {
        console.log('3');
    }, 500);
    
}

// xq().then(()=>{
//     m().then(()=>{
//         b()
//     })
// }).catch(()=>{
//     console.log('f')
// })

// 1. 执行 xq 函数,立即返回一个 promise 实例对象, 但是此时该对象的状态是 pending (等待状态)
// 2. .then立即触发,但是 then 里面的回调函数没有触发
// 3. 等待 xq 函数里面的 reslove() 执行完毕, 此时实例对象的状态会变更为 fulfilled (成功状态), 此时
// .then 回调

xq() // 里面执行到了 resolve 方法
.then(()=>{ // then的源码里面也返回了一个 promise 实例对象, 状态默认继承自 xq 函数返回的对象
    return m()
})
.then(()=>{// 保证第一个 then 返回的对象状态继承于marry 函数返回的对象状态
    b()
})
