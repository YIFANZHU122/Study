// let [a,b,c] = [1,2,3]

// const arr = [1,[2,3,[4]]]
// const [a1,[b1,c1,[d1]]] = arr


// const arr = [1,2,3,4,5,6]
// const [a1,...a2] = arr
// console.log(a1,a2)


// const obj = {
//     name:'11',
//     age:18,
//     like:{
//         n:2
//     }
// }

// // let {name:name,age:age,like:{n:n}} = obj
// let {name,age,like:{n}} = obj


// const [a,b,c,d,e] = "hello"
// console.log(a,b,c,d,e)


// const str = 'hello' //str.length
// let {length} = 'hello'

// console.log(length);


function foo({x,y}) {
    return x + y
}

foo({x:1,y:2})




