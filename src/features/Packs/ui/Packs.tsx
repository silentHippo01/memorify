import { PacksCard } from "@/entities/Deck";
import { packApi, useGetCardsByPackIdQuery } from "../model/packApi";
import { CircularProgress } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";


export const Packs = () => {

    const { data: cards, error, isLoading } = useGetCardsByPackIdQuery(1);
    const { data: packs, error: errorPacks, isLoading: isLoadingPacks } = packApi.useGetUserPacksQuery('');
    console.log('cards', cards)
    console.log('packs', packs)


    if (isLoading) {
        return (
            <div className="w-full flex flex-wrap gap-3"><CircularProgress aria-label="Loading..." /></div>
        )
    }

    if (packs === undefined) {
        return (
            <>
                <div className=""><h1>Ваши колоды</h1></div>
                <div className="w-full flex flex-wrap gap-3">
                    <h1>У вас еще нет колод...</h1>
                </div>
            </>
        )
    }

    return (
        <>
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Ваши колоды</h1>
            <div className="w-full flex flex-wrap gap-3">
                {
                    packs.map((pack: any) => {
                        return (
                            <PacksCard
                                key={pack.id_pack}
                                id_pack={pack.id_pack}
                                title_pack={pack.title_pack}
                                description={pack.description}
                                quantity_cards={pack.quantity_cards}
                            // avatar_pack={pack.avatar_packs}
                            />)
                    })
                }
                {/* <Deck
                    id_pack={1}
                    title_pack="English"
                    description="lorem ipsum dolor sit amet consectetu"
                    quantity_cards={10}
                    avatar_pack="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                /> */}

            </div>
        </>
    );
};
