import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, removeTodoAction,editTodoAction } from './action/todoAction'
import './App.css'

function App () {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo) // access todo
  const { todos } = todo;
  const [todoList, setTodoList] = useState()
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTodoAction(todoList))
  }
  function removeHandler(t) {     
    dispatch(removeTodoAction(t))
  }
  // function editHandler(t){
  //   dispatch(editTodoAction(t))
  // }
  return (
    <div className='App'>
      <h1> TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Enter a Todo Activity'
          value={todoList}
          onChange={(e) => {
            setTodoList(e.target.value)
           
          }}
        />
        <button type='submit'>Go</button>
      </form>
      <ul>
        {/* checking if its empty  */}
        {todos &&
          todos.map(t => (
            <li
              key={t.id}
              style={{
                border: '1px solid black',
                width: '450px',
                margin: '10px',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <span style={{ margin: '10px' }}>{t.Todo}</span>
              {/* <button
               onClick={()=> editHandler(t)}
               >Edit</button> */}
              <button
               onClick={()=> removeHandler(t)}
               >Delete</button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default App
