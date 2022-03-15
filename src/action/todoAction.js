export const AddTodoAction = Todo => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState()
  console.log(todos[0])
  const hasTodo = todos.find(i => i.Todo === Todo)
  console.log(Todo,todos )

  if (!hasTodo && Todo !== '') {
    dispatch({
      type: 'ADD_TODO',
      payload: [{ id: Math.ceil(Math.random()*100), Todo }]
    })
  }
}
export const editTodoAction = Todo => (dispatch, getState) => {
    const {
      todo: { todos }
    } = getState() // reducer accessing
    // const hasTodo = todos.find(i => i.Todo === Todo)
    let {id,Todo}= Todo;
   const index =  todos.map(t => t.id ===id)
   console.log(index)

   if (index){
    
    {
      dispatch({
        type: 'EDIT_TODO',
        payload: [ Todo ]
      })
    }
   }
   
   
  }

export const removeTodoAction = Todo => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState() // reducer accessing
  dispatch({
    type: 'REMOVE_TODO',
    payload: todos.filter(t => t.id !== Todo)
  })
}


