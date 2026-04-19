
import { useSelector, useDispatch } from 'react-redux';
import { add, addListValue } from '../../store/modules/counterStore';
import { useRef } from 'react';

export default function App() {

    // 使用数据
    const { count, list } = useSelector((state) => state.counter)
    const dispatch = useDispatch()//触发器

    // const addCount = () => {
    //    // 调用仓库中的 add 方法
    //    dispatch(add())
    // }
    const inputRef = useRef(null)
    const addList = () => {
        const val = inputRef.current.value
        dispatch(addListValue(val))
    }
    return (
        <div>
            {/* <h1>{count}</h1>
        <button onClick={addCount}>+</button> */}

            <input type="text" ref={inputRef} />
            <button onClick={addList}>添加</button>
            <ul>
                {
                    list.map((item) => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

