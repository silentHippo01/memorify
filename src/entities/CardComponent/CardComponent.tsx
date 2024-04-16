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
    id_card?: number;
    termin?: string;
    termin_definition?: string;
    avatar_card?: string;
}

export const CardComponent = (props: CardComponentProps) => {

    const {
        id_card,
        termin,
        termin_definition,
        avatar_card = true //УБРАТЬ
    } = props;

    const onKnownClick = () => {

    }

    const onUnknownClick = () => {

    }

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
            {/* <div>
                <Card className="max-w-[800px]">
                    <CardBody>
                        <div className="flex items-center justify-center overflow-hidden">
                            <p className="max-w-[400px] mx-1">
                                Какой город изображен на картинке?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi asperiores illo libero reprehenderit, officia commodi, ducimus, quaerat est esse facilis animi quisquam voluptatibus optio fugiat quas praesentium ipsam autem!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi asperiores illo libero reprehenderit, officia commodi, ducimus, quaerat est esse facilis animi quisquam voluptatibus optio fugiat quas praesentium ipsam autem!
                            </p>
                            {avatar_card && <Image
                                className="mx-1 my-4"
                                src={'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg'}
                                fallbackSrc={''}
                            // width={400}
                            />}
                        </div>

                    </CardBody>

                    <CardFooter className="flex width-full justify-center gap-4">
                        <Button onClick={onKnownClick} color="success" variant="ghost">Знаю</Button>
                        <Button onClick={onUnknownClick} color="danger" variant="ghost">Не знаю</Button>
                    </CardFooter>
                </Card>
            </div> */}

            {/* <motion.div
                className="max-w-[800px] bg-red-500"
                onClick={handleClick}
                animate={isFlipped ? "hidden" : "visible"}
                variants={variants}
            > */}
            <Card className="max-w-[800px]">
                {
                    isFlipped === false ?
                        <motion.div
                            className="max-w-[800px]"
                            onClick={handleClick}
                            animate={isFlipped ? "hidden" : "visible"}
                            variants={variants}
                        >
                            <CardBody>
                                <div className="flex items-center justify-center overflow-hidden">
                                    <p className="max-w-[400px] mx-1">
                                        Какой город изображен на картинке?
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi asperiores illo libero reprehenderit, officia commodi, ducimus, quaerat est esse facilis animi quisquam voluptatibus optio fugiat quas praesentium ipsam autem!
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi asperiores illo libero reprehenderit, officia commodi, ducimus, quaerat est esse facilis animi quisquam voluptatibus optio fugiat quas praesentium ipsam autem!
                                    </p>
                                    {avatar_card && <Image
                                        className="mx-1 my-4"
                                        src={'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg'}
                                        fallbackSrc={''}
                                    // width={400}
                                    />}
                                </div>

                            </CardBody>
                            <CardFooter className="flex width-full justify-center gap-4">
                                <Button onClick={onKnownClick} color="success" variant="ghost">Знаю</Button>
                                <Button onClick={onUnknownClick} color="danger" variant="ghost">Не знаю</Button>
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
                                <div className="flex items-center justify-center overflow-hidden">
                                    Нью-йорк!
                                </div>
                            </CardBody>
                        </motion.div>

                }
            </Card>
            {/* </motion.div> */}
        </>
    );
};
