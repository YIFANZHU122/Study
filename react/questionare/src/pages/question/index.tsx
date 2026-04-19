import { useEffect, useState } from 'react'
import './index.scss'
import { setQuestionList,setAnswersId } from '../../store/modules/questional'
import { useDispatch, useSelector } from 'react-redux'
import type { Ques,Answer } from '../../store/index'
import { useNavigate } from 'react-router-dom'

export default function index() {
    const [ques,setQues] = useState<Ques[]>([])
    const [num,setNum] = useState(1)
    const [isSelect,setIsSelect] = useState(false)
    const [selectedAnswer,setSelectedAnswer] = useState<Answer>()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getDate = async () => {
        const response = await fetch('https://mock.mengxuegu.com/mock/6767738f98077b17fe6792e2/question-naire')
        const data = await response.json()
        console.log(data);
        
        dispatch(setQuestionList(data.questions))
        setQues(data.questions)
    }

    useEffect(() => {
        getDate()
    },[])

    const nextTopic = () => {
        setIsSelect(false)
        if(!isSelect){
            return
        }
        if(num === ques.length ){
            navigate('/result')
        }else{
            if(selectedAnswer){
                dispatch(setAnswersId(selectedAnswer.topic_answer_id))
            }
            setNum(num+1)
        }

    }

    const selectAnswer = (item: Answer) => {
       
        setIsSelect(true)
    }

  return (
    <div className="question-container">
        <div className="question-container-hd">
            <div className="question-container-hd-title">第 {num}/{ques.length} 题</div>
            <div className="question-container-hd-progress">
                <div className="question-container-hd-progress-bar" style={{width: `${num/ques?.length*100}%`}}>
                </div>
            </div>
        </div>
        <div className="question-container-bd">
            <div className="question-container-bd-option">
                <div className="question-container-bd-option-card">
                    <div className="order">Q{num}</div>
                    <div className="title">{ques[num-1]?.topic_name}</div>
                    <ul className="list">
                        {
                            ques[num-1]?.topic_answer?.map((item) => {
                                return (
                                    <li key={item.topic_answer_id}>
                                        <input type="radio" name='item' value={item.answer_name} id={`item${item.topic_answer_id}`} 
                                        onChange={() => selectAnswer(item)}/>
                                        <label htmlFor={`item${item.topic_answer_id}`}>{item.answer_name}</label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="question-container-ft">
            <div className="question-container-ft-btn" onClick={nextTopic}>
               {num === ques.length ? '提交' : '下一题'}
            </div>
        </div>
    </div>
  )
}
