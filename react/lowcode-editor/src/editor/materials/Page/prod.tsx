import type { CommonComponentProps } from '../../interface';

export default function Page({id, name, children ,style}: CommonComponentProps) {



  return (
    <>
      <div 
      className='p-[20px] '
      style={{
        ...style
      }}
      >
        {children}
      </div>
    </>

  )
}
