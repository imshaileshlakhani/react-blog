import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const likeApi = createApi({
    reducerPath: 'like',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333/',
    }),
    tagTypes: ['like'],
    endpoints: (builder) => ({
        getAllLike: builder.query({
            query: () => ({
                url: 'like',
                method: 'GET',
            }),
            providesTags: ['like'],
        }),
        getLikeByUserAndBlogId: builder.query({
            query: ({ blogId, userId }) => ({
                url: `like?blogId=${blogId}&userId=${userId}`,
                method: 'GET',
            }),
            providesTags: ['like'],
        }),
        getLikesByBlogId: builder.query({
            query: (id) => ({
                url: `like?blogId=${id}`,
                method: 'GET',
            }),
            providesTags: ['like'],
        }),
        addLike: builder.mutation({
            query: (body) => ({
                url: 'like',
                method: 'POST',
                body,
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['like'],
        }),
        removeLike: builder.mutation({
            query: (id) => ({
                url: `like/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['like'],
        })
    })
})

export default likeApi.reducer
export const { useGetLikeByUserAndBlogIdQuery, useAddLikeMutation, useGetLikesByBlogIdQuery, useRemoveLikeMutation, useGetAllLikeQuery } = likeApi

