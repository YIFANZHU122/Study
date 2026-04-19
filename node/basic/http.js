const http = require('http')
const mysql = require('mysql2')

const server = http.createServer((req, res) => {
    if (req.url === '/user') {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '12345',
            database: 'demo'
        })
        connection.query('select * from user', (err, data) => {
            res.end(JSON.stringify(data))
        })
    }
    console.log('hello world');
    
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})