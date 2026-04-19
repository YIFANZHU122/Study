let arr = [1,2]
const obj = {
    a:1,
    b:2,
    '3':3
}
obj[arr] = '12'
obj.abc = 33
console.log(obj['3']);
console.log(obj);







const m =new Map()
m.set(arr,'1')
console.log(m.has(arr));
m.delete(arr)
console.log(m.has(arr));
