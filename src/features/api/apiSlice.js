import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "apiSlice",

    baseQuery: fetchBaseQuery({
        baseUrl: "https://job-intanship-server-rashelmahomud.vercel.app",
    }),
    tagTypes: ['jobs', 'job'],
    endpoints: (builder) => ({})

})