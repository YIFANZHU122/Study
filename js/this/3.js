// var a = 1
// function foo() {
//     console.log(this.a);
// }

// function bar() {
//     var a = 2
//     foo()
// }
// bar()


var a = 3
function foo() {
    var a = 2
    function bar() {
        var a = 1
        console.log(this.a); // 3
        
    }
    bar() // 独立调用
}
foo()
