import {createSlice} from '@reduxjs/toolkit'
// 仓库中的一个子模块
const counter = createSlice({
    name: 'counter',// 子模块名称
    initialState: {// 子模块的初始状态
        count: 0,
        list: ['a', 'b', 'c']
    },
    reducers: { //修改数据的同步方法
        add(state) {
            state.count += 1
        },
        addListValue(state, action) {
            state.list.push(action.payload)
        }
    }
})

const {add, addListValue} = counter.actions; //获取修改数据的同步方法
export {add, addListValue}

const counterReducer = counter.reducer;// 导出子模块的reducer
export default counterReducer;


