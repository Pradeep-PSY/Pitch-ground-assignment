import { Action } from "."
import { ActionType } from "../actions/action.type"

// interface Inter {
//     todos : string[]
// }

const initialState = {
    toos:[]
}

export const todoReducer = (state = initialState, action) =>{
    switch(action.type){
        case ActionType.GET_TODOLIST_SUCCESS:{
            return{
                ...state,
                todos: [
                    ...state.toos,
                    action.payload
                ]
            }
        }
        default:return state
    }
}