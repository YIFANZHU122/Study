// 创建一个服务,定义一个接口/api/users
// 读取 db.json 文件,向前端返回数据

// 在本文件 npx nodemon server.js  插件,不用反复重启后端
// 或者npm i nodemon -g 全局下载下来

require('dotenv').config()
const http = require('http')
const fs = require('fs')
const OpenAI = require('openai') // npm i openai

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: process.env.DEEPSEEK_API_KEY   // npm i dotenv
});

const server = http.createServer( async(req, res) => {
    //处理跨域问题
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods','*')

    if(req.url.includes('/api/users')) {  // 接口地址
        const url = new URL(req.url,`http://${req.headers.host}`)
        const query = url.searchParams.get('name') //获取到前端传递过来的数据

        if(query == 'all') {
            const data = fs.readFileSync('./db.json', 'utf-8')
            const users = JSON.parse(data).users
            
            res.end(JSON.stringify({
                success:true,
                data:users
            }))
        }else {
            // 将让 deepseek 去 db.json 文件中查找 哪一条数据的 name 属性值等于 query
            // 将这条数据返回给前端
            const data = fs.readFileSync('./db.json', 'utf-8')
            const users = await openai.chat.completions.create({
                messages: [
                    { role: "system", content: "你是一个很好的助手" },
                    { role: "user", content: `请分析${data}中的数据,找出 
                    哪一条数据的 name 属性值等于 ${query}, 
                    将这条数据读取出来,存放在一个数组中,返回给我,我只需要一个数组,不需要其它内容
                    形如: {
                        "data":[
                            {
                                "id": 1,
                                "name": "张三",
                                "age": 18,
                                "phone": "13812345678"
                            }
                        ]
                    
                    }`
                 }
                ],
                model: "deepseek-chat",
            })
            console.log(users.choices[0].message.content);
            res.end()
    }

}})

server.listen(3000,() =>{


})