import { useEffect } from 'react'

import { useSpringValue, animated, useSpring, useTrail, useSpringRef, useChain } from '@react-spring/web'

import './index.css'


export default function Demo() {
  // const width = useSpringValue(0,{
  //   config:{
  //     duration:2000,
  //     mass:1,
  //     tension:260,
  //     friction:20,

  //   }
  // })
  // useEffect(()=>{
  //   width.start(300)
  // },[])
  //  const [style,api] = useSpring(() => {
  //   return {
  //     from:{
  //     width:100,
  //     height:100
  //   },
  //   config:{
  //     duration:2000,
  //   }
  //   }
  //  })

  const api1 = useSpringRef()
  const [style1] = useTrail(3, () => {
   

    return { 
      ref:api1,

      from: {
        width: 0,
      },
      to: {
        width: 300,
      },
      config: {
        duration: 1000,
      }
    }

  },[])
  const api2 = useSpringRef()
  const [style2] = useTrail(3, () => {
    
    return {
      ref:api2,

      from: {
        height: 100,
      },
      to: {
        height: 50,
      },
      config: {
        duration: 1000,
      }
    }

  },[])

useChain([api1,api2],[0,1],500)


  return (
    // <animated.div className='box' style={style} 
    // >


    //   <h1>hello world</h1>

    // </animated.div>
    <div>
      {
        style1.map((item,index) => {
          return (
            <animated.div key={index} style={{...item,...style2[index]}} className='box'>
              <h1></h1>
            </animated.div>
          )
        })

      }
    </div>
  )
}
