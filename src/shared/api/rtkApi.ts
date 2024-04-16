import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const rtkApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: '',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('') || '';
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({})
})