import { useState, createContext, useContext } from 'react'
const MyContext = createContext()

function A() {
    return (
        <div>
            <B />
        </div>
    )
}

function B() {
    const msg = useContext(MyContext)
    return (
        <div>
            <h1>我是B组件---{msg}</h1>
        </div>
    )
}



export default function Parent() {
    const [msg, setMsg] = useState('我是A组件')
    return (
        <div>
            <MyContext.Provider value={msg}>
            <A />
            </MyContext.Provider>
        </div>
    )
}
