import { rtkApi } from "@/shared/api/rtkApi";


export const cardsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getUserPacks: build.query({
            query: () => 'packs',
            providesTags: ['Cards']
        }),

        getCardsByPackId: build.query({
            // query: (packId) => `cards/${packId}`,
            query: (packId) => `packs/cards/${packId}`,
            providesTags: ['Cards']
        }),

        createCard: build.mutation({
            query: (arg) => ({
                url: 'cards/create',
                method: 'POST',
                body: arg
            }),
            invalidatesTags: ['Cards', 'Packs'],
        }),

        updateCard: build.mutation({
            query: (card) => ({
                url: `cards/update/${card.id_card}`,
                method: 'PATCH',
                body: card
            }),
            invalidatesTags: ['Cards'],
        }),

        deleteCard: build.mutation({
            query: (id_card) => ({
                url: `cards/delete/${id_card}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Cards'],
        }),

    })
})



