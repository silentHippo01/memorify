
import { rtkApi } from "@/shared/api/rtkApi";


export const learnApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        saveResult: build.mutation({
            query: (arg) => ({
                url: 'review-history/save_results',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ['Cards', 'Packs'],
        }),
    })
})

