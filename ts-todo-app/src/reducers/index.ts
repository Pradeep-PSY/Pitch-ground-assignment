import { ActionType } from "../actions/action.type"


interface getAction {
    type: ActionType.GET_TODOLIST_SUCCESS,
    payload: object
}


export type Action = getAction