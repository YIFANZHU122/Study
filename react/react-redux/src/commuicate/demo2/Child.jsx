
import { useRef } from 'react'

export default function Child({ setList }) {
    const inputRef = useRef(null)

    const handler = () => {
        setList((prev) => [...prev, inputRef.current.value])
    }

    return (
        <div className="hd">
            <input type="text" ref={inputRef} />
            <button onClick={handler}>确认</button>
        </div>
    )
}