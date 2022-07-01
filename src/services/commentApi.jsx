import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const commentApi = createApi({
    reducerPath: 'comment',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333/',
    }),
    tagTypes: ['comment'],
    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => ({
                url: 'comment',
                method: 'GET',
            }),
            providesTags: ['comment'],
        }),
        getCommentsByBlogId: builder.query({
            query: (id) => ({
                url: `comment?blogId=${id}`,
                method: 'GET',
            }),
            providesTags: ['comment'],
        }),
        addComment: builder.mutation({
            query: (body) => ({
                url: 'comment',
                method: 'POST',
                body,
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['comment'],
        }),
    })
})

export default commentApi.reducer
export const { useGetCommentsQuery, useAddCommentMutation, useGetCommentsByBlogIdQuery } = commentApi

