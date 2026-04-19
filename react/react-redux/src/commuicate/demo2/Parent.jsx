import { useState } from 'react'
import Child from './Child'


export default function Parent() {

    const [list, setList] = useState(['react', 'vue', 'angular'])


    return (
        <div>
            <Child setList={setList} />
            <div className="bd">
                <ul>
                    {
                        list.map((item) => {
                            return <li key={item}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}