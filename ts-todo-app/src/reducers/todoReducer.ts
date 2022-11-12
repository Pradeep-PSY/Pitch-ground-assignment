import { Action } from "."
import { ActionType } from "../actions/action.type"

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action:Action) =>{
    switch(action.type){
        case ActionType.GET_TODOLIST_SUCCESS:{
            return{
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        }
        default:return state
    }
}