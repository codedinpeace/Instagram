import {create} from 'zustand'
import {axiosInstance} from '../config/axiosInstance'

export const usePostStore = create((set)=>({
    posts:[],
    isGettingPosts:false,

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
    }

}))