import React, { useState, useRef } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


export default function Parent() {


    const [list, setList] = useState(['react', 'vue', 'angular'])
    // const [data, setData] = useState('')

    // const getData = (res) => {
    //     setData(res)
    // }

    return (
        <div>
          {/* <Child1 getData={getData} /> */}
          <Child1 setList={setList} />
          <Child2 list={list} />
        </div>
    )
}