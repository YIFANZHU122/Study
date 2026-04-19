# 弹性布局
- flexBox
- 简便的、完整、响应式的实现各种页面效果


1. 弹性容器有主轴和交叉轴之分, 默认主轴是水平方向, 交叉轴是垂直方向
2. 弹性容器的子元素默认沿主轴排列
3. 子容器默认不放大, 但可以设置flex-grow:1 ;来允许子元素放大
4. 子元素默认可以缩小, 但可以设置flex-shrink:0 ;来允许子元素缩小
5. 子容器可以设置 order 属性来改变他们的排列顺序, 值越小越靠前
6. flex-basis: 100px ;设置子容器的初始尺寸
7. flex: 0 0 100px; 3 4 6 的简写

# 弹性容器本身
1. justify-content: center;控制所有子元素在主轴居中
2. align-items:center;控制所有子元素在交叉轴居中
3. flex-direction: column;改变主轴的方向
4. flex-wrap: warp 换行
5. flex-flow:row warp ; 3 4 的简写
6. align-content: center;当存在多根主轴时, 控制所有子元素在交叉轴上居中

# 多栏布局
1. 两栏布局
2. 三栏布局