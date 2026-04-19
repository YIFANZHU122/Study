import React, { useState, useRef } from 'react'
import Child from './Child'


export default function Parent() {

    const [list, setList] = useState(['react', 'vue', 'angular'])
    const inputRef = useRef(null)

    const handler = () => {
        setList([...list, inputRef.current.value])
    }

    return (
        <div>
            <div className="hd">
                <input type="text" ref={inputRef} />
                <button onClick={handler}>确认</button>
            </div>
            <Child list={list} />
        </div>
    )
}