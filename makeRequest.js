import axios from "axios";

export const makeRequest = axios.create({
    baseURL: "https://meet.littlearyans.in/api",
    // baseURL: process.env.APP_API_URL,
    headers: {
        Authorization: "bearer" + process.env.NEXT_PUBLIC_BACKEND_API_TOKEN,
    },
});   