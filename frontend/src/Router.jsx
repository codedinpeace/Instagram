import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import Feed from './features/posts/pages/Feed'
import { useAuthStore } from './States/authStore'
import Profile from './features/auth/pages/Profile'
import CreatePost from './features/posts/pages/CreatePost'

const Router = () => {

  const {isLoggedIn} = useAuthStore()

  return (
    <>
        <Routes>
            <Route path='/' element={isLoggedIn ? <Feed /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-post' element={<CreatePost />} />
        </Routes> 
    </>
  )
}

export default Router