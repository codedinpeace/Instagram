import axios from "axios";

export const axiosInstance = axios.create({
    withCredentials:true,
    baseURL:"https://mithun-files.onrender.com/api"
})