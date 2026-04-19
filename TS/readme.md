# TypeScript

1. 静态类型:声明一个变量要同时
2.

## 类型
- any    任意类型
- unknown 未知类型
- never  永远不会有类型

- null 空值

- Object 广义对象类型 约等于 any
- object 狭义对象类型 只包含 对象, 数组, 函数


- 值类型
const aa:'hello' = 'hello'

- const bb: number | string = 1

const sex: '男' | '女' = '男'

- type 类型别名
type sexType = '男' | '女'

- interface 接口