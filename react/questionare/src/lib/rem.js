// 根据用户屏幕尺寸来设置页面根字体大小
(function(win, doc) {
    // 1. 获取用户屏幕的宽度
    const width = win.innerWidth
    // 2. 设置页面根字体大小
    doc.documentElement.style.fontSize = width / 18.75 + 'px'
    // 3. 监听页面尺寸变化事件
    win.addEventListener('resize', function() {
        // 1. 获取用户屏幕的宽度
        const width = win.innerWidth
        // 2. 设置页面根字体大小
        doc.documentElement.style.fontSize = width / 18.75 + 'px'
    })

})(window, document)