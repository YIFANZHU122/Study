
import type { CommonComponentProps } from '../../interface';
import { useMaterialDrop } from '../../hooks/useMaterialDrop';

export default function Container({ id, name, children,style }: CommonComponentProps) {



  const { canDrop, dropRef,contextHolder } = useMaterialDrop(['Button','Container'],id)

  return (
    <>
      {contextHolder}
      <div 
      data-component-id={id}
      ref={dropRef as any} 
      className={` min-h-[100px] 
        p-[20px]
         ${canDrop ? 'border-[2px] border-[#38b1d9]' : 'border-[1px] border-[#000]'}`
        }
      style={style}
      >
        {children}
      </div>
    </>
  )
}
