/// <reference types="vite-plugin-svgr/client" />
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
}

export const PacksCard = (props: PacksCardProps) => {
    const {
        id_pack,
        title_pack,
        description,
        quantity_cards,
        avatar_pack
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
        // <Link
        //     to={`/decks/${id_pack}`}
        // >
        <Card className="py-4 max-w-[480px] w-full px-4">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className=" text-3xl font-semibold mb-4">{title_pack}</h3>
                <p className="text-sm font-bold mb-2">Описание: {description}</p>
                <p className="text-sm font-bold">Количество карт: {quantity_cards}</p>
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
                    <Button
                        onClick={onEditClick}
                        className=""
                        variant="bordered"
                    >
                        Редактировать
                    </Button>
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

                    {/* <Icon
                        svg={TrashIcon}
                    /> */}
                </div>
            </CardBody>
        </Card >
    );
};
