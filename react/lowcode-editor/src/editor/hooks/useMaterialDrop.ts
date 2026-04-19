import { useComponentStore } from '../stores/components'
import { useComponentConfigStore } from '../stores/component-config'
import { useDrop } from 'react-dnd'
import { message } from 'antd'

export function useMaterialDrop(accept: string[], id: number) {

    const { addComponent } = useComponentStore()
    const { componentConfig } = useComponentConfigStore()
    

    const [messageApi, contextHolder] = message.useMessage();

    const [{ canDrop }, dropRef] = useDrop(() => ({

        accept: ['Button', 'Container',],
        drop: (item: { type: string }, monitor) => {
            const didDrop = monitor.didDrop() //是否被动冒泡接收其它组件
            if (didDrop) return
            //将该组件的对象植入到 json 中

            messageApi.success(item.type)

            const props = componentConfig?.[item.type]?.defaultProps
            const desc = componentConfig?.[item.type]?.desc
            addComponent({
                id: Date.now(),
                name: item.type,
                props: props,
                desc:desc,
                style:{}
            }, id)
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
        }),
    }))

    return {
        canDrop,
        dropRef,
        contextHolder
    }
}