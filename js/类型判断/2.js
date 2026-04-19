//instanceof

let s = 'hello' 
let n = 123  
let b = true 
let d = null 
let u = undefined 
let r = Symbol('123') 
let j = 1414121n  

console.log(s instanceof String);//false
console.log(n instanceof Number);//false
console.log(b instanceof Boolean);//false
console.log(d instanceof Object);//false
console.log(u instanceof Object);//false
console.log(r instanceof Symbol);//false
console.log(j instanceof BigInt);//false




let a = []  
let o = {} 
let f = function () {} //function
let date = new Date()  //Object
let set = new Set()  //Object
let map = new Map()  //Object


console.log(a instanceof Array);//true
console.log(o instanceof Object);//true
console.log(f instanceof Function);//true
console.log(date instanceof Date);//true
console.log(set instanceof Set);//true
console.log(map instanceof Map);//true
