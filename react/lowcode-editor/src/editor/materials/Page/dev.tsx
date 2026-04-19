import type { CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';

export default function Page({id, name, children ,style}: CommonComponentProps) {


  const { canDrop, dropRef, contextHolder } = useMaterialDrop(['Button', 'Container'], id)

  return (
    <>
      {contextHolder}
      <div 
      data-component-id={id}
      ref={dropRef as any} 
      className='p-[20px] h-[100%] box-border '
      style={{
        ...style, border: canDrop ? '2px solid #38b1d9' : 'none',
      }}
      >
        {children}
      </div>
    </>

  )
}
