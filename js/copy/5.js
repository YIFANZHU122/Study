let obj ={
    a:1,
    b:2,
    c:{
        d:3,
        e:4
    },
    l:BigInt(1),
    f:undefined,
    g:null,
    e:{}
}

let no = structuredClone(obj)
