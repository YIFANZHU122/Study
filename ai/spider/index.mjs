import {createCrawl, createCrawlOpenAI } from 'x-crawl'  //爬虫工具
import dotenv from 'dotenv'  //环境变量
dotenv.config()

//创建爬虫
const crawlApp = createCrawl({
    maxRetry: 3, //重复次数
    intervalTime: { min:1000,max:3000}, //重复间隔时间
})

//创建 openai 爬虫
const crawlOpenAI = createCrawlOpenAI({
    clientOption:{ //配置参数
        apikey:Process.env.OPENAI_API_KEY  //ai密钥
    },
    defaultModel: 'gpt-4.1', //默认模型
}) 


crawlApp.crawlPage('https://movie.douban.com/chart').then(async(res) =>{
    //获取到页面内容
    console.log(res);

    const { page , browser} = res.data

    //获取页面上的结构
    const targeSelector = '.article'
    await page.waitForSelector(targeSelector)
    const highlHTML = await page.$eval(targeSelector,(el)=> el.innerHTML) //转换为 html 字符串

    //console.log(highlHTML);
    //让 ai 解析这份 html 字符串，解析出我们要的数据
    const result = await crawlOpenAI.parseElement(
        highlHTML,
        `获取电影评分,将评分不小于 8.0 的电影的图片链接，电影名称，电影评分获取到。输出格式为:
        [
            {
                img:'电影图片',
                name:'电影名称',
                score:'电影评分'
            }
        ]
        `
    )
    browser.close()
    console.log(result)
})
