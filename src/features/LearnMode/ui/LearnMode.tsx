import { CardComponent } from "@/entities/CardComponent";
import { useGetCardsByPackIdQuery } from "@/features/Packs/model/packApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, Image } from "@nextui-org/react";



export const LearnMode = () => {

    const { id_pack = 0 } = useParams();
    const { data: cards, error, isLoading } = useGetCardsByPackIdQuery(id_pack);

    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [results, setResults] = useState<any[]>([]);

    const currentCard = cards?.[currentCardIndex];

    const handleAnswer = (answer: boolean, id_card: number) => {
        const newResults = [
            ...results,
            { cardId: id_card, answer: answer }
        ];
        if (answer) {
            setCorrectAnswers(correctAnswers + 1);
        }
        setResults(newResults);
        console.log(newResults);

        if (currentCardIndex < cards.length) {
            setCurrentCardIndex(currentCardIndex + 1);
        } else {
            console.log('Results:', JSON.stringify({
                id_pack: id_pack,
                id_user: 1,
                date: Date.now(),
                answers: newResults,
            }));
        }
    };

    const onKnownClickHandler = (id_card: number) => {
        handleAnswer(true, id_card);
    }

    const onUnknownClickHandler = (id_card: number) => {
        handleAnswer(false, id_card);
    }

    const restart = () => {
        setCorrectAnswers(0);
        setCurrentCardIndex(0);
        setResults([]);
    }

    console.log(currentCardIndex, cards?.length);

    if (currentCardIndex === cards?.length) {
        return (
            <>
                <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Результаты</h1>
                <div className="flex flex-col justify-center items-center">
                    <Card className="max-w-[700px] w-full">
                        <CardBody className="text-center flex justify-center items-center">
                            <h1>Вы изучили все карточки!</h1>
                            <h2>Ваш результат: вы знаете {correctAnswers} карточек из {cards?.length}</h2>
                            {
                                correctAnswers > cards?.length - correctAnswers
                                    ?
                                    <img
                                        className="max-w-[60px] w-full mt-4 mb-4"
                                        src="/img/success.png"
                                    />
                                    :
                                    <img
                                        className="max-w-[60px] w-full mt-4 mb-4"
                                        src="/img/failed.png"
                                    />
                            }

                            <Button
                                onClick={restart}
                                color="primary"
                            >
                                Начать заново
                            </Button>
                        </CardBody>
                    </Card>
                </div>
            </>
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Режим обучения</h1>
            <div className="flex flex-col justify-center items-center">
                <CardComponent
                    id_card={currentCard?.id_card}
                    termin={currentCard?.termin}
                    termin_definition={currentCard?.termin_definition}
                    avatar_card={currentCard?.avatar_card}
                    onKnownClick={onKnownClickHandler}
                    onUnknownClick={onUnknownClickHandler}
                />
            </div>
        </div>
    );
};
