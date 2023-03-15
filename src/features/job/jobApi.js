import { apiSlice } from "../api/apiSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        postJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/job',
                body: data,
            })
        }),
        applyJob: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/applyJob',
                body: data,
            })
        }),

        ApplyedJob: builder.query({
            query: () => ({
                url: '/applyed'
            })
        }),


        getJobs: builder.query({
            query: () => ({
                url: '/jobs'
            }),
            providesTags: ["jobs"]
        }),

        getJobById: builder.query({
            query: (id) => ({
                url: `/job/${id}`

            }),
            providesTags: ["jobs"]
        })


    }),
});


export const { usePostJobMutation, useApplyedJobQuery, useGetJobByIdQuery, useGetJobsQuery, useApplyJobMutation } = jobApi;