import { loadCorpus } from './lib/corpus.js'
import { createRandomPicker } from './lib/random.js'
import { generate } from './lib/generator.js'

// fs.readFile('./corpus/data.json', {encoding: 'utf-8'}, (err, data) => {
//     if (err) {
//         console.log('读取文件失败', err)
//     }else{
//         console.log('文件内容:', data)
//     }
// })
// const url = import.meta.url //__filename
// const path = path.resolve(dirname(fileURLToPath(url)), 'corpus/data.json')
// const data = fs.readFileSync(path, { encoding: 'utf-8' })
// const corpus = JSON.parse(data)

const corpus = loadCorpus('./corpus/data.json')

const title = createRandomPicker(corpus.title)()
const article = generate(title, {corpus, min:2000, max:3000})

console.log(corpus)

