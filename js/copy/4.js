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
    k:function(){},
    v:Symbol(1)
}

let no =JSON.parse(JSON.stringify(obj))
obj.c.d = 6