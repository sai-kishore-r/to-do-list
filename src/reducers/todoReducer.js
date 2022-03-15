export const todoReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log(action.payload)
      return {
        ...state,
        todos: action.payload
      }
    case 'EDIT_TODO':
      console.log(action.payload)
      return {
        ...state,
        todos: action.payload.Todo
      }
    case 'REMOVE_TODO':
      console.log(action.payload)
      return {
        ...state,
        todos: action.payload
      }
    default:
      return state
  }
}
