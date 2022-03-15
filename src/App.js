import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  AddTodoAction,
  removeTodoAction,
  editTodoAction
} from './action/todoAction'
import './App.css'

function App () {
  const dispatch = useDispatch()
  const  selector   = useSelector(state => state?.todo) // access todo
  console.log("reduser",selector?.todos)
  const [todoList, setTodoList] = useState()
  const [editTodo, setEditTodo] = useState({});
  const [selectedId,setSelectedId] = useState("");
  const [edit, setEdit] = useState(false)
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(AddTodoAction(todoList))
  }
  const todos= [];
  function removeHandler (t) {
    dispatch(removeTodoAction(t.id))
  }
  const editHandler = e => {
    setEdit(false)
    e.preventDefault()
    dispatch(editTodoAction(editTodo))
    // setTodoList(t.Todo)
  }
  
function editFunction(Id){
  console.log("ID-",Id)
  setSelectedId(Id)
  setEdit(true)

}

  return (
    <div className='App'>
      <h1> TODO</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Enter a Todo Activity'
          // value={todoList}
          onChange={e => {
            setTodoList(e.target.value)
          }}
        />
        <button type='submit'>Go</button>
      </form>
      <div>
        {/* checking if its empty  */}
        {/* {console.log(selector.todos[0].id)} */}
        {selector?.todos &&
          selector?.todos?.map(t => (
            <div
              key={t.id}
              style={{
                border: '1px solid black',
                width: '450px',
                margin: '10px',
                alignItems: 'center',
                display: 'flex',
                padding: '5px',
                cursor: 'pointer'
              }}
            >
              {edit && t.id===selectedId? (
                <>
                  <form style={{ paddingRight: '20px' }} onSubmit={editHandler}>
                    <input
                      value={t.todo}
                      onChange={e => {
                        setEditTodo({"id": selectedId , Todo : e.target.value})
                      }}
                    />{' '}
                    <button type='submit'>Go</button>
                  </form>
                </>
              ) : (
                <div style={{ margin: '10px' }}>{t.Todo}</div>
              )}

              <button onClick={() => editFunction(t.id)}>Edit</button>
              <button onClick={() => removeHandler(t)}>Delete</button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
