let obj ={
    a:1,
    b:2,
    c:{
        d:3,
        e:4
    }
}
let o = Object.assign({},obj)
obj.b = 5
obj.c.d = 6

console.log(o);
