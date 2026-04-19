// if(true) {
//     var a = 10
// }
// console.log(a);



// if(true) {
//     let b = 10
// }
// console.log(b);



if(true) {
    let d = 10
    var c = 3
}

console.log(c);



// let t = 1
// if(true) {
//     let t = 2     
//     console.log(t);  // t = 2
// }


let f = 1
if(true) {
    console.log(f);   // 出不去  暂时性死区
    let f = 2 
}