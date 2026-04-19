import  { useState, useEffect } from 'react'

export default function Child2({ list }) {
    
    // const [list, setList] = useState(['react', 'vue', 'angular'])
   
    // useEffect(() => {
    //     if (data) {
    //         setList([...list, data])
    //     }
    // }, [data])

    return (
        <div className="bd">
            <ul>
                {
                    list.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}
