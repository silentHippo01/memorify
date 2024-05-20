/// <reference types="vite-plugin-svgr/client" />
import { Icon } from "@/shared/ui/Icon/Icon";
import { Button, Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";

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
        <Card className="py-4 max-w-[400px] w-full px-4">
            <CardHeader className="pb-0 pt-2 flex-col items-start">
                <h3 className=" text-xl font-semibold mb-4">{title_pack}</h3>
                <p className="text-tiny font-bold mb-2">Описание: {description}</p>
                <p className="text-tiny font-bold">Количество карт: {quantity_cards}</p>
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
                        className=""
                        color="primary"
                        variant="solid"
                    >
                        Учить
                    </Button>
                    <Button
                        onClick={onEditClick}
                        className=""
                        color="primary"
                        variant="bordered"
                    >
                        Редактировать
                    </Button>
                    {/* <Icon
                        svg={TrashIcon}
                    /> */}
                </div>
            </CardBody>
        </Card>
    );
};
