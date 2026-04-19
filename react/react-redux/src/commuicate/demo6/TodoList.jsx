import './todoList.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { delTaskAction, singleCheckAction, allCheckAction, addTaskAction } from '../../store/modules/todoListStore'

function TodoList() {
  const { list } = useSelector(state => state.todoList)
  const [task, setTask] = useState('')
  const dispatch = useDispatch()

  const singleCheck = (e, id) => {
    const action = singleCheckAction(id)
    dispatch(action)
  }

  const onChange = (e) => {
    setTask(e.target.value)
  }
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTaskAction(task))
      setTask('')
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={task}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={list.every((item) => item.completed)} onChange={(e) => dispatch(allCheckAction(e.target.checked))}/>
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            list.map((item) => {
              return (
                <li className={item.completed ? 'todo completed' : 'todo'} key={item.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" checked={item.completed} onChange={(e) => singleCheck(e, item.id)} />
                    <label>{item.title}</label>
                    <button className="destroy" onClick={() => dispatch(delTaskAction(item.id))}></button>
                  </div>
                </li>
              )
            })
          }
          {/* <li className="todo">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>learn react</label>
              <button className="destroy"></button>
            </div>
          </li>
          <li className="todo completed">
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={true} />
              <label>learn react</label>
              <button className="destroy"></button>
            </div>
          </li> */}
        </ul>
      </section>
    </section>
  )
}

export default TodoList