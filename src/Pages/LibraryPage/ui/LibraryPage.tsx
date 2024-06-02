import { PacksCard } from "@/entities/Deck";
import { packApi } from "@/features/Packs/model/packApi";
import { CircularProgress } from "@nextui-org/react";

const LibraryPage = () => {

    const { data: packs, isLoading, error } = packApi.useGetAllPacksQuery({});


    if (isLoading) {
        return (
            <div className="w-full flex flex-wrap gap-3 h-screen justify-center"><CircularProgress aria-label="Loading..." /></div>
        )
    }

    if (error) {
        return (
            <div><h1>Произошла ошибка при загрузке данных</h1></div>
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Библиотека готовых колод</h1>
            <p>Здесь вы можете найти готовые колоды для изучения, которые создали другие пользователи</p>

            <div className="w-full flex flex-wrap gap-3 h-full mt-4">
                {
                    packs &&
                    packs.map((pack: any) => (
                        <PacksCard
                            key={pack.id_pack}
                            id_pack={pack.id_pack}
                            title_pack={pack.title_pack}
                            description={pack.description}
                            quantity_cards={pack.quantity_cards}
                            disableDelete={true}
                            disableEdit={true}
                            addPack={true}
                        />)
                    )
                }
            </div>

        </div>
    );
};

export default LibraryPage;