
import React, { useEffect, useState } from 'react'
import Empty from './Empty';
import { useDispatch, useSelector } from "react-redux";
import TodoList from './TodoList';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../actions';

const ShowTodo = () => {
    const dispatch = useDispatch();
    const {todos :any[]} = useSelector((state:State)=>state.toodo)

    const { getTodolist } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
       
        if(todos.length === 0){
             
            dispatch(getTodolist())
        }
      
    }, [todos.length])
    
    
    return (
        (
           
           !todos.length ? ( <Empty /> ) : ( <TodoList todos={todos} /> )
        )
    )
}

export default ShowTodo


//@ts-ignore is used for ignore in ts
//control shit p --> typescript restart and many more