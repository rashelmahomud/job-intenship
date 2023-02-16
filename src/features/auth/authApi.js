import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/user',
                body: data,
            }),
        }),




    })
})

export const { useRegisterMutation } = authApi;