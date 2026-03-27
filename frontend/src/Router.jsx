import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './features/auth/Login'
import Register from './features/auth/Register'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </>
  )
}

export default Router