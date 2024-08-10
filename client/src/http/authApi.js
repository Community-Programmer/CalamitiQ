
import axios from "axios";



const api = axios.create({
    baseURL:'http://localhost:5050',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials: true
});

export const loginUser = async (data) => {
    return api.post('/api/v1/auth/login',data)
}

export const signupuser = async (data) => {
    return api.post('/api/v1/auth/signup',data)
}

export const verifyUser = async () => {
    return api.post('/api/v1/auth/verify')
}

export const logoutUser = async () => {
    return api.post('/api/v1/auth/logout')
}