// function a() {
//     setTimeout(() => {
//         console.log(1);
//     }, 1000);
// }
// function b() {
//     console.log(2);
    
// }

// function c() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log(1);
//             resolve()
//         }, 1000);
//     })

// }
// function d() {
//     console.log(2); 
// }

// c().then(()=>{
//     d()
// })

function c() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(1);
            resolve()
        }, 1000);
    })
}
function d() {
    console.log(2); 
}

async function foo() {
    await c()
    d()
}
foo()