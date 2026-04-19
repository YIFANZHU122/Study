// function bar() {
//    console.log(a);
// }
// function foo() {
//     var a = 1
//     bar()
// }
// var a = 2
// foo()



function a() {
   var num = 10
   function b() {
    var num = 20
    count()
   }
   function c() {
    console.log(num);   
   }
   b()
}
a()

