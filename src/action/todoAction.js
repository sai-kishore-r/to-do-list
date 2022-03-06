export const AddTodoAction = Todo => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState()
  const hasTodo = todos.find(i => i.Todo === Todo)
  if (!hasTodo && Todo !== '') {
    dispatch({
      type: 'ADD_TODO',
      payload: [{ id: Todo, Todo }, ...todos]
    })
  }
}
// export const editTodoAction = Todo => (dispatch, getState) => {
//     const {
//       todo: { todos }
//     } = getState() // reducer accessing
//     dispatch({
//       type: 'EDIT_TODO',
//       payload: todos.map(t => t.id !== Todo.id)
//     })
//   }

export const removeTodoAction = Todo => (dispatch, getState) => {
  const {
    todo: { todos }
  } = getState() // reducer accessing
  dispatch({
    type: 'REMOVE_TODO',
    payload: todos.filter(t => t.id !== Todo.id)
  })
}
