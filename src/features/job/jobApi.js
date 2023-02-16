import { apiSlice } from "../api/apiSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        postJob: builder.mutation({
            query: () => ({
                method: 'POST',
                url: '/job',
                body: 'data'
            }),
        }),



    }),
});


export const { usePostJobMutation } = jobApi;