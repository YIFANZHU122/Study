# dependencies
- 生产依赖: 项目开发完成时, 打包时, dependencies 中的第三方源代码依赖也会被打包

# devDependencies
- 开发依赖: 只在开发过程中有意义, 不会被打包最终的项目代码中


# 受控组件和非受控组件

- 表单中的 input:
1. 用户修改 input值
2. 代码修改 input值

- 能用代码设置表单的初始值, 但是无法再次修改 value，能修改 value 的只有用户, 
非受控模式