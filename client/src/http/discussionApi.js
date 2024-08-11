import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5050',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials: true
});

export const addDiscussion = async (data) => {
    return api.post('/api/v1/discussion',data)
};

export const getDiscussion = async () => {
    return api.get('/api/v1/discussion')
};

export const addReply = async (data) => {
    return api.post(`/api/v1/discussion/${data.id}/replies`,data)
};