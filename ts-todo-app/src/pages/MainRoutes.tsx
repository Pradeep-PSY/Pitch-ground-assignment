import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './Todo'

const MainRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Todo />} />
   </Routes>
  )
}

export default MainRoutes