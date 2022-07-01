import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactApi = createApi({
    reducerPath: 'contact',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3333/',
    }),
    tagTypes: ['contact'],
    endpoints: (builder) => ({
        getContact: builder.query({
            query: () => ({
                url: 'contact',
                method: 'GET',
            }),
            providesTags: ['contact'],
        }),
        addContact: builder.mutation({
            query: (body) => ({
                url: 'contact',
                method: 'POST',
                body,
                header: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            }),
            invalidatesTags: ['contact'],
        }),
        deleteContact: builder.mutation({
            query: (id) => ({
                url: `contact/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contact'],
        })
    })
})

export default contactApi.reducer
export const { useGetContactQuery, useAddContactMutation, useDeleteContactMutation } = contactApi

