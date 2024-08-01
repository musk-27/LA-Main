// import axios from "axios";

// export const makeRequest = axios.create({
//   // baseURL: "https://strapi.littlearyans.in/api",
//   baseURL: "http://127.0.0.1:1337/api",
//   // baseURL: process.env.APP_API_URL,
//   headers: {
//     Authorization: "bearer" + process.env.NEXT_PUBLIC_BACKEND_API_TOKEN,
//   },
// });


// // import axios from "axios";

// // export const makeRequest = axios.create({
// //   // Use the appropriate baseURL depending on your environment
// //   baseURL: process.env.NODE_ENV === 'production'
// //     ? "https://strapi.littlearyans.in/api"
// //     : "http://127.0.0.1:1337/api",
// //   headers: {
// //     Authorization: "Bearer " + process.env.NEXT_PUBLIC_BACKEND_API_TOKEN,
// //   },
// // });


import axios from "axios";

export const makeRequest = axios.create({
  baseURL: process.env.NODE_ENV === "production"
    ? "https://strapi.littlearyans.in/api"
    : "http://127.0.0.1:1337/api",
  headers: {
    Authorization: "Bearer " + process.env.NEXT_PUBLIC_BACKEND_API_TOKEN,
  },
});
