import { create } from 'zustand'
import type { CSSProperties } from 'react';

export interface Component {
    id: number;
    name: string;
    props: any;
    style?: CSSProperties;
    desc: string;
    children?: Component[];
    parentId?: number;

}

export interface State {
    components: Component[],
    mode: 'edit' | 'preview',
    curComponentId: number | null,
    curComponent: Component | null
}

export interface Action {
    addComponent: (component: any, parentId?: number) => void;
    deleteComponent: (componentId: number) => void;
    updateComponentProps: (componentId: number, props: any) => void;
    setCurComponentId: (componentId: number) => void;
    updateComponentStyle: (componentId: number, style: CSSProperties) => void;
    setMode: (mode: 'edit' | 'preview') => void;
}


export const useComponentStore = create<State & Action>((set, get) => ({


    // 数据
    components: [
        {
            id: 1,
            name: 'Page',
            props: {},
            desc: '页面'
        }
    ],
    mode: 'edit',
    curComponentId: null,
    curComponent: null,
    // 方法
    addComponent: (component, parentId) => {
        set((state) => {
            if (parentId) {
                // 获取到父级对象
                const parentComponent = getComponentById(parentId, state.components);
                if (parentComponent) {
                    parentComponent.children ? parentComponent.children.push(component) : parentComponent.children = [component];
                }
                component.parentId = parentId;
                return {
                    components: [...state.components]
                }
            }
            return {
                components: [...state.components, component]
            }
        })
    },
    deleteComponent: (componentId) => {
        if (!componentId) {
            return;
        }
        const component = getComponentById(componentId, get().components);
        if (component?.parentId) {
            const parentComponent = getComponentById(component.parentId, get().components);
            if (parentComponent) {
                parentComponent.children = parentComponent.children?.filter((item) => item.id !== componentId);
            }
        }
        set({
            components: [...get().components]
        })
    },
    updateComponentProps: (componentId, props) => {
        set((state) => {
            const component = getComponentById(componentId, state.components);
            if (component) {
                component.props = { ...component.props, ...props };
                return {
                    components: [...state.components]
                }
            }
            return {
                components: [...state.components]
            }
        })

    },
    setCurComponentId: (componentId) => {
        set((state) => ({
            curComponentId: componentId,
            curComponent: getComponentById(componentId, state.components)
        }))
    },
    updateComponentStyle: (componentId, style) => {
        set((state) => {
            const component = getComponentById(componentId, state.components);
            if (component) {
                component.style = { ...component.style, ...style };
                return {
                    components: [...state.components]
                }
            }
            return {
                components: [...state.components]
            }
        })
    },
    setMode: (mode) => {
        return set({
            mode:mode
        })
    }
}))




export function getComponentById(id: number | null, components: Component[]): Component | null {
    if (!id) {
        return null;
    }
    for (const component of components) {
        if (component.id === id) {
            return component;
        }
        if (component.children && component.children.length > 0) {
            const result = getComponentById(id, component.children);
            if (result) {
                return result;
            }
        }
    }
    return null
}