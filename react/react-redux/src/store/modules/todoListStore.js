import {createSlice} from '@reduxjs/toolkit'

const todoList = createSlice({
    name: 'todoList',
    initialState: {
        list: [
            {
                id: 1,
                title: '学习react',
                completed: true
            },
            {
                id: 2,
                title: '学习vue',
                completed: false
            }
        ]
    },
    reducers: {
        delTaskAction: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
        },
        addTaskAction: (state, action) => {
            const item  = {id: state.list.length ? state.list[state.list.length - 1].id + 1 : 1, title: action.payload, completed: false}
            state.list.push(item)
        },
        allCheckAction: (state, action) => {
            state.list.forEach(item => item.completed = action.payload)
        },
        singleCheckAction: (state, action) => {
            state.list.forEach(item => {
                if (item.id === action.payload) {
                    item.completed = !item.completed
                }
            })
        }
    }
})
const {delTaskAction, addTaskAction, allCheckAction, singleCheckAction} = todoList.actions
export {delTaskAction, addTaskAction, allCheckAction, singleCheckAction}


export default todoList.reducer
