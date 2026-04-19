let obj ={
    a:1,
    b:2,
    c:{
        d:3,
        e:4
    }
}

function shallowCopy(obj) {
    let newObj = {}
    for(let key in obj) {
        if(obj.hasOwnProperty(key)) { // 判断 key 是不是 obj 显示拥有的
            newObj[key] = obj[key]
        }
        
    }
    return newObj
}