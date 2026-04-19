# typeof
1. typeof 可以准确判断除了 null 以外的基本数据类型
2. typeof 判断引用数据类型, 除了 function 以外, 都是 Object

- typeof 是通过将值转化成二进制来判断类型的, 对于二进制前三位是 0 的统一识别为对象, 而所有的应用
类型转换成二进制的前三为都是 0 , null 的二进制全是 0


# instanceof
- instanceof 内部机制是通过判断对象的隐式原型链是否指向构造函数的 prototype 属性
- 不能判断基本类型数据


# Object.prototype.toString.call()

Object.prototype.toString
1. 如果 this value is undefined， 返回 “[object Undefined]”。
2. 如果 此值为 null， 返回 “[object Null]”。
3. 设 O 为调用 ToObject 的结果，并将 this 值 作为参数。
4. 设 class 为 O 的 [[Class]] 内部属性的值。
5. 返回 String 值，该值是将三个 字符串 “[object ”、class 和 “]”。


# Array.isArray()