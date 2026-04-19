// // jsx -- 将 html 写在 js 中

// function App(){
//   const name = '张三';
//   // const songs = [
//   //   {id:1,name:'歌曲1'},
//   //   {id:2,name:'歌曲2'},
//   //   {id:3,name:'歌曲3'},
//   // ];
//   const flag = false
//   // const style = {
//   //   color:'red',
//   // }
//   return (
//     <div className="App">
//       <h1>Hello,{name}!</h1>
//       {/* <ul>  
//         {songs.map((song,index) => (
//           <li key={song.id}>{index+1},{song.name}</li>
//         ))}
//       </ul> */}
//       {/* <h3>{flag ? '是' : '否'}</h3>
//       <div style={style}>11</div> */}
//       <div className={flag ? 'title' : ''}>222</div>
//     </div>
//   )
// }

// export default App;
import {useEffect,useState} from 'react'

// async function queryData() {
//     const data = await new Promise(resolve => {
//         setTimeout(() => {
//             resolve(666)
//         }, 2000);
//     })
//     return data
// }

function App() {
    let [num,setNum] = useState(1)

    // useEffect(() => {
    //     queryData().then(data =>{
    //         setNum(data)
    //     })
    // },[1])

    useEffect(() => {
        let timer = setInterval(() => {
            console.log(num);        
        }, 1000);

        return () => {
            console.log('清除定时器');
            clearInterval(timer)
        }
    },[num])

    function handle(){
        // num++ //num 改了但是无法触发试图更新
        setNum(num + 1) // 将 num 修改为 参数值
        console.log(num);
        
    }

    return (
        <div>
            <button onClick={handle}>{num}</button>
        </div>
    )
}

export default App;