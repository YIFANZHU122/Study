function foo(person) {
    person.age = 20
    person = {
        name:'11'
    }
    return person
}
let p1 = {
    name:'22',
    age:33
}
let p2 = foo(p1)

console.log(p1);  //{ name: '22', age: 20 }
console.log(p2);  //{ name: '11' }
