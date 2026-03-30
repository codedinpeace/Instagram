import {create} from 'zustand'
import {axiosInstance} from '../config/axiosInstance'

export const usePostStore = create((set)=>({
    posts:[],
    isGettingPosts:false,
    isCreatingPost:false,

    getFeed: async () => {
        set({isGettingPosts:true})
        try {
            const response = await axiosInstance.get("/post/get-feed")
            set({posts:[...response.data.posts]})
        } catch (error) {
            console.log(error)
        } finally{
            set({isGettingPosts:false})
        }
    },

    createPost: async(formData) => {
        set({isCreatingPost:true})
        try {
            const response = await axiosInstance.post("/post/create-post", formData)
            console.log("Post created successfully")
            console.log(response.data.post)
        } catch (error) {
            console.log(error)            
        } finally{
            set({isCreatingPost:false})
        }
    }

}))