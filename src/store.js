import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension';
import {todoReducer} from "./reducers/todoReducer"
const reducer = combineReducers({
  todo : todoReducer
})

// const initialState = {}
const middleware = [thunk]

const store = createStore(
    reducer, 
    // initialState,
    composeWithDevTools(applyMiddleware(...middleware))) ///spread operator is must

export default store
