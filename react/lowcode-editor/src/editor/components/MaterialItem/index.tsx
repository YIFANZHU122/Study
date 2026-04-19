import React from 'react'
import { useDrag } from 'react-dnd'

export interface MaterialItemProps {
    name: string;
}

export default function MaterialItem(props: MaterialItemProps) {

    const [_, dragRef] = useDrag(() => ({
        type:props.name,
        item: {
            type:props.name,
        }
    }))

    return (
        <div
            ref={dragRef}
            className='
            w-[100px] 
            p-[5px] 
            border-[2px] 
            border-[#000] 
            cursor-pointer 
            m-[10px] 
            inline-block 
            hover:border-[#38b1d9] 
            rounded-[5px]
            bg-[#fcf8eb]
            '>
            {props.name}
        </div>
    )
}
