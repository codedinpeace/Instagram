import {create} from 'zustand'
import {axiosInstance} from '../config/axiosInstance'

export const usePostStore = create((set)=>({
    posts:[],
    isGettingPosts:false,
    isCreatingPost:false,

    getFeed: async () => {
        set({isGettingPosts:true})
        try {
            const response = await axiosInstance.get("https://mithun-files.onrender.com//post/get-feed")
            set({posts:[...response.data.posts]})
        } catch (error) {
            console.log(error)
        } finally{
            set({isGettingPosts:false})
        }
    },

    createPost: async(formData, navigate) => {
        set({isCreatingPost:true})
        try {
            const response = await axiosInstance.post("https://mithun-files.onrender.com//post/create-post", formData)
            console.log("Post created successfully")
            console.log(response.data.post)
            navigate("/")
        } catch (error) {
            console.log(error)            
        } finally{
            set({isCreatingPost:false})
        }
    }

}))