import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const questionSlice = createSlice({
    name: 'question',
    initialState: {
        questionList: [],
        answersId: [] as number[]

    },
    reducers: {
        setQuestionList: (state, action) => {
            state.questionList = action.payload
        },setAnswersId: (state, action:PayloadAction<number>) => {
            state.answersId.push(action.payload)
        }
    }
})

export const { setQuestionList,setAnswersId } = questionSlice.actions

export default questionSlice.reducer
