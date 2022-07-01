import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'user',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333/',
    }),
    tagTypes: ['user'],
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: 'user',
                method: 'GET',
            }),
            providesTags: ['user'],
        }),
        getUserByID: builder.query({
            query: (id) => ({
                url: `user/${id}`,
                method: 'GET',
            }),
            providesTags: ['user'],
        }),
        addUser: builder.mutation({
            query: (body) => ({
                url: 'user',
                method: 'POST',
                body,
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['user'],
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `user/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['user'],
        })
    })
})

export default userApi.reducer
export const { useGetAllUserQuery, useGetUserByIDQuery, useAddUserMutation, useDeleteUserMutation } = userApi

