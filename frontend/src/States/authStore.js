import { create } from "zustand";
import { axiosInstance } from "../config/axiosInstance";

export const useAuthStore = create((set)=>({
    authUser:null,
    isLoggingIn:false,
    isLoggedIn:false,
    isRegistering:false,

    register: async (data) => {
        set({isRegistering:true})
        try {
            const response = await axiosInstance.post("/auth/register", data)
            set({authUser:response.data, isLoggedIn:true})
            console.log("Registered Successfully")
        } catch (error) {
            console.log(error)
        } finally{
            set({isRegistering:false})
        }
    },

    login: async (data) => {
        set({isLoggingIn:true})
        try {
            const response = await axiosInstance.post("/auth/login", data)
            set({authUser:response.data, isLoggedIn:true})
            console.log("Logged in successfully")
        } catch (error) {
            console.log(error)
        } finally{
            set({isLoggingIn:false})
        }
    },

    check:async ()=>{
        try {
            const response = await axiosInstance.get("/auth/check")
            set({authUser:response.data.authenticatedUser, isLoggedIn:true})
            // console.log(response.data.authenticatedUser)
        } catch (error) {
            console.log(error)
        }
    }

}))