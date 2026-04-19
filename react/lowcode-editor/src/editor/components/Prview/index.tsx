import React from 'react'
import { useComponentStore } from '../../stores/components';
import type { Component } from '../../stores/components';
import { useComponentConfigStore } from '../../stores/component-config';

export default function Prview() {

    const { components } = useComponentStore();
    const { componentConfig } = useComponentConfigStore();

    function renderComponents(components:Component[]): React.ReactNode{
        return components.map((components)=> {
            const config = componentConfig[components.name]
            if(!config.prod) {
                return null
            }
            return React.createElement(config.prod,{
                key: components.id,
                id: components.id,
                name: components.name,
                style: components.style,
                ...config.defaultProps,
                ...components.props
            },
            renderComponents(components.children || [])
            )
        }) 
    }
  return (
    <div>
        {renderComponents(components)}
    </div>
  )
}
