import React from 'react'
import Navbar from '../../../components/Navbar'
import { usePostStore } from '../../../States/postStore'
import Loader from '../../../components/Loader'

const Post = () => {

    const {posts, isGettingPosts} = usePostStore()

    if(isGettingPosts){
        return (
            <Loader />
        )
    }

  return (
    <>
        <Navbar />
    <div className='w-full h-screen flex justify-center'>
        <div className='w-[570px] h-[670px] bg-[#0100366b] mt-20 rounded-xl'>   
            <div className="actual-content w-full h-screen flex   flex-col  gap-10 ">
                {posts?.map((post)=>(
                    <div key={post._id} className='flex flex-col bg-[#0d0d2f] gap-2 rounded-xl p-5'>
                    <div className="profile-data flex gap-2 items-center px-14 mt-5">
                    <div className="pfp w-8 h-8 rounded-full bg-blue-900 ">
                        <img src={post.user.imageURL} className='rounded-full' alt="" />
                    </div>  
                    <div className="username"><p className='text-[#d4d3d3]'>{post.user.username}</p></div>
                </div>
                <div className="post w-[450px] h-[550px] mx-auto bg-blue-950 rounded-xl">
                    <img src={post.imgUrl} alt="" className='object-cover w-full h-full' />
                </div>  
                <div className="caption">
                    <p className='text-white text-lg px-14'>{post.caption}</p>
                </div>
                <div className="icons flex justify-between px-15">
                <div className="left flex gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>
                </div>
                <div className="right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg>
                </div>
                </div>
                </div>
        ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Post