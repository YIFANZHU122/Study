const arr = [1, 2, 3]

let newArr = ['a','b',...arr]

// newArr = newArr.concat(arr)
// newArr.push(...arr)

arr.sort((a,b) =>{
    return a - b //b - a
})