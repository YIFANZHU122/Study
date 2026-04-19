


// const aa:'hello' = 'hello'


// type sexType = string | number
// let an:sexType = 'male'


let arr:number[] = [1,2,3]
let arr1:(number | string)[] = [1,'2',3]
let arr2: Array<number | string> = [1,'2',3]

//元组
let tuple: [number,string] = [1,'2']

interface IInfo{
    name:string,
    age?:number,
    sex:'男' | '女'
}
let p:IInfo = {
    name:'张三',
    sex:'男'
}
