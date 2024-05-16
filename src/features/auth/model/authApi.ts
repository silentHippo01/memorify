import { rtkApi } from "@/shared/api/rtkApi";

export const authApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({

        signIn: build.mutation({
            query: (arg) => ({
                url: 'auth/registration',
                method: 'POST',
                body: arg
            }),
        }),

        login: build.mutation({
            query: (arg) => ({
                url: 'auth/login',
                method: 'POST',
                body: arg
            }),
        })
    })
})
