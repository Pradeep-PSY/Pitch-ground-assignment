import { todoReducer } from "../reducers/todoReducer";
import { combineReducers } from 'redux';


const reducers = combineReducers({
    toodo: todoReducer
})

export default reducers

export type State = ReturnType<typeof reducers>