// 后端
const http = require('http')
const port = 3000


const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')

  if(req.url.startsWith('/login')) {
    const username = req.url.split('?')[1].split('=')[1].split('&')[0]
    const password = req.url.split('&')[1].split('=')[1]

    console.log(username, password)
    res.end('登录成功')
  }
})
