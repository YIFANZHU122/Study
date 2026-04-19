import { create } from 'zustand'
import ContainerDev from '../materials/Container/dev'
import ButtonDev from '../materials/Button/dev'
import ButtonProd from '../materials/Button/prod'
import PageDev from '../materials/Page/dev'
import PageProd from '../materials/Page/prod'
import ContainerProd from '../materials/Container/prod'

export interface ComponentSetter {
    name:string,
    label:string,
    type:string,
    [key:string]:any;
}

export interface ComponentConfig {
    name: string;
    defaultProps: Record<string, any>;
    // component: any;
    desc:string;
    setter?:ComponentSetter[];
    styleSetter?:ComponentSetter[];
    dev:any;
    prod:any;
}

export interface State {
    componentConfig: { [key: string]: ComponentConfig }
}

export interface Action {
    registerComponent: (name: string, componentConfig: ComponentConfig) => void
}

export const useComponentConfigStore = create<State & Action>(
    (set) => ({
        componentConfig: {
            Container: {
                name: 'Container',
                defaultProps: {},
                desc:'容器',
                dev: ContainerDev,
                prod:ContainerProd
            },
            Button: {
                name: 'Button',
                defaultProps: {
                    text:'按钮',
                    type:'primary'
                },
                desc:'按钮',
                dev: ButtonDev,
                prod:ButtonProd,
                setter:[
                    {
                        name:'type',
                        label:'类型',
                        type:'select',
                        options:[
                            {
                                label:'主要按钮',
                                value:'primary'
                            },
                            {
                                label:'次要按钮',
                                value:'default'
                            }
                        ]
                    },
                    {
                        name:'text',
                        label:'文本',
                        type:'input'
                    }
                ],
                styleSetter:[
                    {
                        name:'width',
                        label:'宽度',
                        type:'inputNumber'
                    },
                    {
                        name:'height',
                        label:'高度',
                        type:'inputNumber'
                    }
                ]
            },
            Page:{
                name:'Page',
                defaultProps:{},
                desc:'页面',
                dev:PageDev,
                prod:PageProd
            }
        },
        registerComponent: (name, componentConfig) => {
            set((state) => {
                return {
                    ...state,
                    componentConfig: {
                        ...state.componentConfig,
                        [name]: componentConfig
                    }
                }
            })
        }
    }))