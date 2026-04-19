const a = {
    b:1
}

let aa = a.b
Object.defineProperty(a,'b',{
    // value: 100, // 初始值
    // writable: false, // 不能修改
    // configurable: false // 不能删除
    get() {
        return aa
    },
    set(val) {
        aa = val
    }
})

a.b = 2
console.log(a.b);
