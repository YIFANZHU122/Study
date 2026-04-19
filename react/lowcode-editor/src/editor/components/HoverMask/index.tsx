import { useMemo, useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import { getComponentById, useComponentStore } from '../../stores/components'

export interface HoverMaskProps {
    containerClassName: string
    componentId: number
    portalWrapperClassName: string
}

// HoverMask 会在鼠标移入组件时显示, 并能完整的覆盖整个组件
export default function HoverMask({ containerClassName, componentId,portalWrapperClassName }: HoverMaskProps) {

    const { components } = useComponentStore()

    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        labelTop: 0,
        labelLeft: 0
    })

    useEffect(() => {
        updatePosition()
    }, [componentId])

    function updatePosition() {
        if (!componentId) {
            return
        }
        const container = document.querySelector(`.${containerClassName}`)
        if (!container) {
            return
        }
        const node = document.querySelector(`[data-component-id="${componentId}"]`)
        if (!node) return

        const { top, left, width, height } = node.getBoundingClientRect()
        const { top: containerTop, left: containerLeft } = container.getBoundingClientRect()
        setPosition({
            top: top - containerTop + container.scrollTop,
            left: left - containerLeft + container.scrollLeft,
            width,
            height,
            labelTop: top - containerTop + container.scrollTop,
            labelLeft: left - containerLeft + width
        })
    }

    const el = useMemo(() => {
        // const el = document.createElement('div')
        // el.className = 'wrapper'

        // const container = document.querySelector(`.${containerClassName}`)
        // container!.appendChild(el)
        // return el
        return document.querySelector(`.${portalWrapperClassName}`)
    }, [])

    const curComponent = useMemo(() => {
        return getComponentById(componentId, components)
    }, [componentId])

    return createPortal((
        <>
            <div style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                width: position.width,
                height: position.height,
                backgroundColor: 'rgba(0,0,255,0.1)',
                border: '1px solid blue',
                borderRadius: 4,
                boxSizing: 'border-box',
                pointerEvents: 'none',
                zIndex: 12
            }}></div>
            <div
            style={{
                position:'absolute',
                top:position.labelTop,
                left:position.labelLeft,
                zIndex:13,
                fontSize:14,
                display:(!position.width || position.width < 10 ) ? 'none' : 'inline-block',
                transform:'translate(-100%,-100%)'
            }}
            >
                <div 
                style={{
                    padding:'0 8px',
                    backgroundColor:'blue',
                    color:'#fff',
                    borderRadius:4,
                    cursor:'pointer',
                    whiteSpace:'nowrap'
                }}
                >{curComponent?.desc}</div>
            </div>
        </>

    ), el)
}
