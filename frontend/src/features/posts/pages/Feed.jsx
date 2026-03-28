import React from 'react'
import Post from '../components/Post'

const Feed = () => {
  return (
    <>
    <main className='flex justify-center '>
    <div className='w-[50%] h-screen post-box'>
    <Post />
    </div>
    </main>
    </>
  )
}

export default Feed