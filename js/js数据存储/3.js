// function foo() {
//     var a = 1
//     var b = a
//     a = 2
//     console.log(a);
//     console.log(b);
// }
// foo()


function foo() {
    var a = {name:'1'}
    var b = a
    a.name = '2'
    console.log(a);  // {name:'2'}
    console.log(b);  // {name:'2'}
}
foo()