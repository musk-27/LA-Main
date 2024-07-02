import axios from "axios";

const api = axios.create({
  baseURL: process.env.APP_API_URL,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
  },
});

// Blogs

export const fetchBlogs = async () => api.get("/blogs?populate=*");
