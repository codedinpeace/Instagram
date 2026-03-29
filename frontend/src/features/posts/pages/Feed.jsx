import React from 'react'
import Post from '../components/Post'

const Feed = () => {
  return (
    <>
    <main className='flex justify-center overflow-hidden    '>
    <div className='w-200 h-screen post-box overflow-auto '>
    <Post />
    </div>  
    </main>
    </>
  )
}

export default Feed