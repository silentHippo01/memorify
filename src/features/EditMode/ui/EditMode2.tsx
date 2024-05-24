import { Button, Card, CardBody, CardHeader, Divider, Input, Textarea } from "@nextui-org/react";
import { NewCardForm } from "./NewCardForm";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { cardsApi } from "@/shared/api/cardsApi";
import { useCallback, useEffect, useState } from "react";
import { packApi } from "@/features/Packs/model/packApi";
import { PackForm } from "./PackForm";



export const EditMode2 = () => {
    const { id_pack = 0 } = useParams();


    const { data: cards, isLoading, error } = cardsApi.useGetCardsByPackIdQuery(+id_pack);
    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            cards: []
        }
    });

    // const deleteHandler = useCallback(async () => {
    //     try {
    //         const res: any = await deleteCard(card.id_card).unwrap();
    //         remove(index)
    //         enqueueSnackbar('Карточка удалена', { variant: 'success' })
    //     } catch (e: any) {
    //         // enqueueSnackbar(e, { variant: 'error' })
    //         enqueueSnackbar("Ошибка", { variant: 'error' })
    //     }
    // }, [card.id_card, deleteCard, enqueueSnackbar, index, remove])

    return (
        <div>
            {
                cards && cards.map((card: any, index: any) => (
                    <form>
                        <Card>
                            <CardHeader className="flex justify-between">
                                <span># {index + 1}</span>
                                {/* <Button onClick={deleteHandler} variant="ghost" color="danger">Удалить</Button> */}
                            </CardHeader>
                            <Divider />
                            <CardBody className="flex flex-row justify-between">
                                <Textarea className="w-[49%]" label="Термин" {...register(`cards.${index}.termin`)} />
                                <Textarea className="w-[49%]" label="Определение" {...register(`cards.${index}.definition`)} defaultValue={card.termin_definition} />
                            </CardBody>
                        </Card>
                    </form>
                ))
            }
        </div>
    );
};
