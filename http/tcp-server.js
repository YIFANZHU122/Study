const net = require('net')

function responseData(str) {
    return `HTTP/1.1  200 OK
    Connection: keep-alive
    Content-Type: text/html
    Content-Length: ${str.length}
    Date: ${new Date()}
    
    ${str}`
}

const server = net.createServer((socket) => { // 建立连接时
    socket.on('data', (data) => {
        const matched = data.toString().match(/^GET ([/\w]+) HTTP/)

        if(matched) {
            const path = matched[1]
            if(path === '/') {
                socket.write(responseData('<h1>hello world</h1>'))
            } else {
                socket.write(responseData('<h1>404 Not Found</h1>',404, 'Not Found'))
            }
        }
    })
    socket.on('close', () => {
        console.log('客户端断开连接')
    })
})

server.listen(8080, () => {
    console.log('服务器启动成功')
})