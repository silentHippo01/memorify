import { PacksCard } from "@/entities/Deck";
import { packApi, useGetCardsByPackIdQuery } from "../model/packApi";
import { CircularProgress } from "@nextui-org/react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";


export const Packs = () => {

    const { data: packs, error: errorPacks, isLoading: isLoadingPacks } = packApi.useGetUserPacksQuery('');
    console.log('packs', packs)


    if (isLoadingPacks) {
        return (
            <div className="w-full flex flex-wrap gap-3 h-screen justify-center"><CircularProgress aria-label="Loading..." /></div>
        )
    }

    if (packs === undefined) {
        return (
            <>
                <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Ваши колоды</h1>
                <div className="w-full flex flex-wrap items-center flex-col gap-3 h-screen justify-center text-2xl mt-4">
                    <h1>У вас еще нет колод...</h1>
                    <Button
                        className="w-[60px] text-white shadow-lg text-3xl my-4 text-green-400"
                        variant="ghost"
                        color="success"
                    >+</Button>
                </div>
            </>
        )
    }

    return (
        <>
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Ваши колоды</h1>
            <div className="flex justify-end">
                <Button
                    className="w-[60px] text-white shadow-lg text-3xl my-4 text-green-400"
                    variant="ghost"
                    color="success"
                >+</Button>
            </div>
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
