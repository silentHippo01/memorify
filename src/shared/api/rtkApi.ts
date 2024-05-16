import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
    reducerPath: 'api',
    tagTypes: ['Packs', 'Cards'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:7000',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('memorify') || '';
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => 'users/allUsers'
        })
    })
})


export const { useGetUsersQuery } = rtkApi