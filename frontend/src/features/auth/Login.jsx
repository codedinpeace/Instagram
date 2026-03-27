import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <main className='flex justify-center items-center h-screen'>
    <div className="form-container flex flex-col gap-[20px] bg-[#ffffff11] p-20 rounded-xl backdrop-blur-2xl">
        <h1 className='text-[#76cffbdd] text-4xl font-semibold'>Login</h1>
        <form className='flex flex-col gap-[26px]'>
            <input type="text" name='username' className='w-[400px] px-[24px] py-[12px] text-white outline-none border-b-2 border-cyan-500 rounded-xl bg-transparent text-lg' placeholder='Enter email or username'/>
            <input type="text" name='password' className='w-[400px] px-[24px] py-[12px] text-white outline-none border-b-2 border-cyan-500 rounded-xl bg-transparent text-lg' placeholder='Enter email or username'/>
            <button type='submit' className='w-[400px] px-[24px] py-[8px] bg-cyan-600 rounded-xl text-white font-semibold text-lg hover:bg-cyan-700 cursor-pointer'>Login</button>
        </form>
        <p className='text-[#ffffffce] text-md'>Don't have an account? <Link className='text-[#76cffbdd]' to='/register'>Register</Link></p>
    </div>
   </main>
  )
}

export default Login