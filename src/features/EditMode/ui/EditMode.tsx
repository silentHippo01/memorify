import { Button, Card, CardBody, CircularProgress, Input, Textarea } from "@nextui-org/react";
import { NewCardForm } from "./NewCardForm";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { cardsApi } from "@/shared/api/cardsApi";
import { useEffect, useState } from "react";
import { packApi } from "@/features/Packs/model/packApi";
import { PackForm } from "./PackForm";
import { useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";

interface EditModeProps {
}

export const EditMode = (props: EditModeProps) => {
    const { } = props;

    const [isDisabled, setDisabled] = useState(true);

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            cards: []
        }
    });

    const { id_pack = 0 } = useParams();

    // const { data: cards, isLoading: isLoadingCards, error } = cardsApi.useGetCardsByPackIdQuery(+id_pack);
    const { data: cards } = packApi.useGetCardsByPackIdQuery(+id_pack);
    const [createCard] = cardsApi.useCreateCardMutation();
    const { data: pack, isLoading: isLoadingPack, error: errorPack } = packApi.useGetPackByIdQuery(+id_pack);

    const dispatch = useDispatch();

    const createCardHandler = () => {
        // append({});
        try {
            createCard({
                id_pack: +id_pack,
            }).unwrap()
        } catch (e) {
            enqueueSnackbar("Ошибка при создании карточки", { variant: 'error' })
        }
        // dispatch(cardsApi.util.invalidateTags(['Cards']))
    }

    return (
        <div className="h-full">
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Редактирование</h1>

            <PackForm
                disabled={isDisabled}
                pack={pack}
            />

            <div className="flex gap-1 justify-center ">
                <Button className="" color="success" variant="bordered" type="button" onClick={createCardHandler}>+</Button>
            </div>

            <div className="mt-4 flex flex-col gap-4">
                {
                    cards && cards.map((item: any, index: any) => (
                        <NewCardForm
                            card={item}
                            key={item.id_card}
                            item={item}
                            index={index}
                        />
                    ))
                }
            </div>
        </div>
    );
};
