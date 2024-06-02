import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface DeckProps {
    id_pack: number;
    title_pack: string;
    description: string;
    quantity_cards: number;
    avatar_pack: string;

}

interface CardComponentProps {
    id_card: number;
    termin?: string;
    termin_definition?: string;
    avatar_card?: string;
    onKnownClick: (id_card: number) => void;
    onUnknownClick: (id_card: number) => void;
}

export const CardComponent = (props: CardComponentProps) => {

    const {
        id_card,
        termin,
        termin_definition,
        avatar_card,
        onKnownClick,
        onUnknownClick
    } = props;

    const variants = {
        visible: {
            rotateY: 0,
            transition: {
                duration: 0.5
            }
        },
        hidden: {
            rotateY: 180,
            transition: {
                duration: 0.5
            }
        }
    };

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <>
            <Card className="max-w-[700px] w-full">
                {
                    isFlipped === false ?
                        <motion.div
                            className="max-w-[800px]"
                            onClick={handleClick}
                            animate={isFlipped ? "hidden" : "visible"}
                            variants={variants}
                        >
                            <CardBody className={`h-96 flex flex-row ${true ? 'justify-between' : 'justify-center'} items-center px-9 gap-4`}>
                                {/* <div className="flex items-center justify-between overflow-hidden"> */}
                                <h1 className=" w-full text-3xl text-center">
                                    {termin}
                                </h1>
                                {avatar_card && <Image
                                    className="object-cover w-full"
                                    width={300}
                                    height={300}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                                    // src={avatar_card}
                                    src={avatar_card}
                                // width={400}
                                />}

                            </CardBody>
                            <CardFooter className="flex width-full justify-center gap-4">
                                <Button onClick={() => onKnownClick(id_card)} color="success" variant="ghost" className="w-[300px] h-[75px] text-2xl">Знаю</Button>
                                <Button onClick={() => onUnknownClick(id_card)} color="danger" variant="ghost" className="w-[300px] h-[75px] text-2xl">Не знаю</Button>
                            </CardFooter>
                        </motion.div>
                        :
                        <motion.div
                            className="max-w-[800px]"
                            onClick={handleClick}
                            animate={isFlipped ? "visible" : "hidden"}
                            // animate={isFlipped ? "hidden" : "visible"}
                            variants={variants}
                        >
                            <CardBody
                                className="h-96 flex items-center justify-center"
                            >
                                <h1 className="max-w-[500px] w-full text-3xl text-center">
                                    {termin_definition}
                                </h1>
                            </CardBody>
                            <CardFooter className="flex width-full justify-center gap-4">
                                <Button onClick={() => onKnownClick(id_card)} color="success" variant="solid" className="w-[300px] h-[75px] text-2xl">Знаю</Button>
                                <Button onClick={() => onUnknownClick(id_card)} color="danger" variant="solid" className="w-[300px] h-[75px] text-2xl">Не знаю</Button>
                            </CardFooter>
                        </motion.div>
                }
            </Card>
        </>
    );
};


// src={'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg'}