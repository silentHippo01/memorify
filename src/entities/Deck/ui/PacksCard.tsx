import { Icon } from "@/shared/ui/Icon/Icon";
import { Button, Card, CardBody, CardFooter, CardHeader, Image, useDisclosure } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { DeletePackModal } from "./DeletePackModal";

interface PacksCardProps {
    id_pack: number;
    title_pack: string;
    description: string;
    quantity_cards: number;
    avatar_pack?: string;
    disableEdit?: boolean;
    disableDelete?: boolean;
    addPack?: boolean;
}

export const PacksCard = (props: PacksCardProps) => {
    const {
        id_pack,
        title_pack,
        description,
        quantity_cards,
        avatar_pack,
        disableEdit = false,
        disableDelete = false,
        addPack = false,
    } = props;

    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const onLearnClick = () => {
        navigate(`/pack/learn/${id_pack}`);
    }

    const onEditClick = () => {
        navigate(`/pack/edit/${id_pack}`);
    }

    return (

        <Card className="py-3 max-w-[480px] w-full px-4 bg-cardColor">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className=" text-3xl font-semibold mb-4">{title_pack}</h3>
                <p className="text-sm font-bold mb-2 h-full">Описание: {description}</p>
                {/* <p className="text-sm font-bold">Количество карт: {quantity_cards}</p> */}
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    className="object-cover mb-3"
                    src={avatar_pack}
                    width={270}
                />
                <div className="flex gap-3">
                    <Button
                        onClick={onLearnClick}
                        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                        color="primary"
                        variant="solid"
                    >
                        Учить
                    </Button>
                    {
                        !disableEdit &&
                        <Button
                            onClick={onEditClick}
                            className=""
                            variant="bordered"
                        >
                            Редактировать
                        </Button>
                    }

                    {
                        !disableDelete &&
                        <>
                            <Button
                                onClick={onOpen}
                                className=""
                                color="danger"
                                variant="bordered"
                            >
                                Удалить
                            </Button>
                            <DeletePackModal
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                                onOpen={onOpen}
                                id_pack={id_pack}
                                title_pack={title_pack}
                            />
                        </>
                    }

                    {
                        addPack &&
                        <Button
                            className="bg-gradient-to-tr shadow-lg"
                            color="success"
                            variant="bordered"
                        >
                            Добавить
                        </Button>
                    }
                </div>
            </CardBody>
        </Card >
    );
};
