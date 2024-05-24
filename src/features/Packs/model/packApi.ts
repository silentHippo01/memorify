import { rtkApi } from "@/shared/api/rtkApi";


export const packApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserPacks: build.query({
            query: () => 'packs',
            providesTags: ['Packs']
        }),

        getPackById: build.query({
            query: (id) => `packs/${id}`,
            providesTags: ['Packs']
        }),

        getCardsByPackId: build.query({
            query: (packId) => `packs/cards/${packId}`,
            providesTags: ['Packs']
        }),

        createPack: build.mutation({
            query: (arg) => ({
                url: 'packs/create',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ['Packs'],
        }),

        updatePack: build.mutation({
            query: (pack) => ({
                url: `packs/update/${pack.id_pack}`,
                method: 'PUT',
                body: pack
            }),
            invalidatesTags: ['Packs'],
        }),

        deletePack: build.mutation({
            query: (id: number) => ({
                url: `packs/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Packs'],
        }),

    })
})

export const useGetCardsByPackIdQuery = packApi.useGetCardsByPackIdQuery;
export const useCreatePackMutation = packApi.useCreatePackMutation;
export const useUpdatePackMutation = packApi.useUpdatePackMutation;
export const useDeletePackMutation = packApi.useDeletePackMutation;