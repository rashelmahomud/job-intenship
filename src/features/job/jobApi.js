import { apiSlice } from "../api/apiSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        postJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: 'job',
                body: data,
            })
        }),
        applyJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: 'applyJob',
                body: data,
            })
        }),

        getJobs: builder.query({
            query: () => ({
                url: '/jobs'
            }),
        }),
        getJobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`

            })
        })


    }),
});


export const { usePostJobMutation, useGetJobByIdQuery, useGetJobsQuery, useApplyJobMutation } = jobApi;