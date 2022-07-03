import axios from "axios";

export const api = axios.create({
    baseURL: 'exp://192.168.18.87:19000/api',
})