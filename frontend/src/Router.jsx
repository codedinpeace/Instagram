import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './features/auth/Login'
import Register from './features/auth/Register'

const Router = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<h1 className='text-4xl font-bold text-cyan-600'>Hello Guys</h1>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>
    </>
  )
}

export default Router