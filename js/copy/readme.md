# 面试题: 请你手写一个深浅拷贝函数

# v8 是如何存储数据的
1. 栈内存: 存储基本数据类型和引用类型的数据地址
2. 堆内存: 存储引用类型的数据


# js中的数据类型
1. 基本数据类型: 栈内存
2. 引用数据类型: 堆内存

# 拷贝
- 复刻一个对象,和原对象长的一摸一样

- 浅拷贝: 只拷贝对象的最外层, 原对象
1. Object.create()
2. [].concat()
3. 数组解构 [...arr]
4. arr.slice(0,arr.length)
5. Object.assign({},obj)
6. arr.toReversed().reverse()

- 深拷贝:层层拷贝,新对象不受原对象  
1. JSON.parse(JSON.stringify(obj))
    - 无法识别bigint类型,无法处理undefined,symbol,function
    - 无法处理循环引用

2. structuredClone()


- 手写深拷贝
