# 路由
- 当浏览器 url 变更后, 控制加载对应的组件
const routes = [
    {
        path: '/',
        element: <Home />
    }
]

- npm i react-router-dom

- BrowserRouter: history 模式的路由
- Routes: 路由列表
- Route: 路由列表项, 配置了路径和组件的映射关系