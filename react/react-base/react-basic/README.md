# JSX
1. 将html 写在js中
2. 在html


# 单页应用: 整个项目只有唯一的一个 html 文件, 所有的页面都做成组件的样子,
被添加到这个 html 文件中进行渲染

# 组件
1.  class 组件
2. function 组件

# hooks(钩子函数)
1. useState -- 定义的一个响应式变量, 提供专门的方法修改变量值
2. useEffect -- 副作用函数中的 effect 函数作为同步函数来执行

    1. 组件每次挂载都会触发
    2. useEffect 第二个参数为一个空数组时, 只会在初次渲染时触发
    3. useEffect 第二个参数为一个数组时, 会在数组中的值发生变化时触发
    4. useEffect 第一个参数为函数, 该函数内部返回一个新的函数, 新函数会在组件卸载时触发


3. useLayoutEffect -- 中的 effect 函数作为同步函数来执行
4. useReducer -- 当修改 state 的逻辑比较复杂时, 用 useReducer
    1. 传入的 reducer 函数中并不能直接修改原 state, 必须要返回一个新对象
    2. useReducer + immer(npm i immer)
5. useRef -- 获取DoM结构
6. useContext -- 跨多组件传递数据


# UI框架