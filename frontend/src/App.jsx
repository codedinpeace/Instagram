import React, { useEffect } from 'react'
import Router from './Router'
import { useAuthStore } from './States/authStore'
import { usePostStore } from './States/postStore'

const App = () => {

  const {check} = useAuthStore()
  const {getFeed} = usePostStore()

  useEffect(()=>{
    check()
    getFeed()
  },[])

  return (
    <>
    <Router />
    </>
  )
}

export default App