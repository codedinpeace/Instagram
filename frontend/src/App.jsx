import React, { useEffect } from 'react'
import Router from './Router'
import { useAuthStore } from './States/authStore'

const App = () => {

  const {check} = useAuthStore()

  useEffect(()=>{
    check()
  },[])

  return (
    <>
    <Router />
    </>
  )
}

export default App