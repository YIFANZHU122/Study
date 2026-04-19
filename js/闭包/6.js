function foo() {
    var a = 1
    var b = 2
    return function bar() {
        console.log(a);
    }
}
var c = foo()  //执行完了,销毁
c()
