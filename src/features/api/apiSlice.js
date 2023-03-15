import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",

    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/',
        // baseUrl: process.env.REACT_APP_URL,
    }),
    tagTypes: ['jobs', 'job'],
    endpoints: (builder) => ({})

})