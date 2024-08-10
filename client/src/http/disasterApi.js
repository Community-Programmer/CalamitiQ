

import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:5050',
    headers:{
        'Content-Type':'application/json'
    },
    withCredentials: true
});

export const addDisaster = async (data) => {
    return api.post('/api/v1/disaster',data)
}

