// GO:{
//     g: undefined
//     fn:function() {}
// }


// var g = 100
// function fn() {
//     console.log(g);
// }
//
// // fn:{ 
// // }
//
// fn()

g = 100
function fn() {
    console.log(g);
    g = 200
    console.log(g);
    var g = 300
}
fn()
var g