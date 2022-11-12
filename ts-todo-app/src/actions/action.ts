import axios from 'axios';
import { ActionType } from './action.type';
import { Dispatch } from 'redux';
import { Action } from '../reducers';



export const getTodolist = () => (dispatch:Dispatch<Action>) =>{
    axios.get('http://localhost:8000/todo-item/list')
    .then((res)=> dispatch({type:ActionType.GET_TODOLIST_SUCCESS, payload:res.data}))
    .catch((err)=> console.log(err));
}