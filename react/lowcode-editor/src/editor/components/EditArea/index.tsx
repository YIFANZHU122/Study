
import { useComponentStore } from '../../stores/components';
import type { Component } from '../../stores/components';
import React,{ useState } from 'react';
import { useComponentConfigStore } from '../../stores/component-config';
import HoverMask from '../HoverMask';
import SelectedMask from '../SelectedMask'


export default function Editor() {
  const { components, setCurComponentId, curComponentId } = useComponentStore();
  const { componentConfig } = useComponentConfigStore();

  const [hoverComponentId, setHoverComponentId] = useState<number>()


  function renderComponents(components: Component[]): React.ReactNode{
    return components.map((component: Component) => {
      const config = componentConfig?.[component.name]
      if(!config?.dev){
        return null
      }

      return React.createElement(config.dev,{
        key: component.id,
        id: component.id,
        name: component.name,
        style: component.style,
        ...config.defaultProps,
        ...component.props
      },
      renderComponents(component.children || [])
    )
    })
  }

  const handleMouseOver: React.MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath()
    for(let i = 0; i < path.length; i++){
      const element = path[i] as HTMLElement
      const componentId = element?.dataset?.componentId
      if(componentId){
       setHoverComponentId(+componentId)
       return
      }
    }
  }
  // 借助冒泡机制, 点击页面上的任何组件, 点击事件会冒泡到最外层, 因此可以在最外层处理点击事件
  const handleClick: React.MouseEventHandler = (e) => {
    const path = e.nativeEvent.composedPath();
    for(let i = 0;i < path.length; i++) {
      const ele = path[i] as HTMLElement
      const componentId =ele.dataset && ele.dataset.componentId
      if(componentId){
        setCurComponentId(+componentId)
        return
      }
    }
  }

  return (
    <div className='h-[100%] edit-area '
    onMouseOver={handleMouseOver} 
    onMouseLeave={() => setHoverComponentId(undefined)}
    onClick={handleClick}
    >
      {renderComponents(components)}
        {hoverComponentId && hoverComponentId !== curComponentId && (
          <HoverMask 
          componentId={hoverComponentId} 
          containerClassName='edit-area'
          portalWrapperClassName='portal-wrapper' 
          />
        )}
        { curComponentId && (
          <SelectedMask 
          componentId={curComponentId}
          containerClassName='edit-area'
          portalWrapperClassName='portal-wrapper' 
          />
        )}
        <div className='portal-wrapper'></div>
    </div>
  )
}
