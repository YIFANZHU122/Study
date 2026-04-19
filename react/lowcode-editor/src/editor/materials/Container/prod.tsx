
import type { CommonComponentProps } from '../../interface';


export default function Container({ id, name, children,style }: CommonComponentProps) {





  return (
    <>

      <div 
      className='p-[20px]'
      style={style}
      >
        {children}
      </div>
    </>
  )
}
