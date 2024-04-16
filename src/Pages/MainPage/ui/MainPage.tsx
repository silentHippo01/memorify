import { Deck } from "@/entities/Deck";
import { CircularProgress } from "@nextui-org/react";
import { useEffect, useState } from "react";

const mockDecks = [
    {
        id_pack: 1,
        title_pack: 'Колода 1',
        author_pack: 'Автор 1',
        avatar_pack: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit suscipit',
        quantity_cards: 10,
    },
    {
        id_pack: 2,
        title_pack: 'Колода 2',
        author_pack: 'Автор 2',
        avatar_pack: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit suscipit',
        quantity_cards: 20,
    },
    {
        id_pack: 3,
        title_pack: 'Колода 2',
        author_pack: 'Автор 2',
        avatar_pack: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit suscipit',
        quantity_cards: 30,
    },
    {
        id_pack: 4,
        title_pack: 'Колода 2',
        author_pack: 'Автор 2',
        avatar_pack: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
        description: 'lorem ipsum dolor sit amet consectetur adipiscing elit suscipit',
        quantity_cards: 40,
    },
]

const MainPage = () => {

    const [decks, setDecks] = useState<any[]>([]);
    const fetchDecks = () => {
        return setTimeout(() => {
            setDecks(mockDecks);
        }, 1500);
    }

    useEffect(() => {
        fetchDecks();
    }, [])

    let loading = false;

    if (loading) {
        return <div className="flex flex-col justify-center items-center h-screen overflow-hidden">
            <CircularProgress aria-label="Loading..." />
        </div>
    }

    return (
        <div className="flex flex-col h-screen">
            <div className=""><h1>Ваши колоды</h1></div>
            <div className="w-full flex flex-wrap gap-3">
                {/* <Deck
                    id_pack={1}
                    title_pack="English"
                    description="lorem ipsum dolor sit amet consectetu"
                    quantity_cards={10}
                    avatar_pack="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png"
                /> */}
                {decks.map((decks) => (
                    <Deck
                        key={decks.id_pack}
                        {...decks}
                    />
                ))}
            </div>

        </div>
    );
};

export default MainPage;