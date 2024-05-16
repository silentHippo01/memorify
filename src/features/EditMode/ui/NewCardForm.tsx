import { cardsApi } from "@/shared/api/cardsApi";
import { Button, Card, CardBody, CardHeader, Divider, Input, Textarea } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";

interface NewCardFormProps {
    index: number;
    register: any;
    remove: any;
    card: any;
}

export const NewCardForm = (props: NewCardFormProps) => {

    const {
        index,
        register,
        remove,
        card
    } = props;

    const [deleteCard, { isLoading, data, error }] = cardsApi.useDeleteCardMutation();
    // const [updateCard, { isLoading: updateLoading, data: updateData, error: updateError }] = cardsApi.useUpdateCardMutation();

    const deleteHandler = useCallback(async () => {
        try {
            const res: any = await deleteCard(card.id_card).unwrap();
            remove(index)
            enqueueSnackbar('Карточка удалена', { variant: 'success' })
        } catch (e: any) {
            // enqueueSnackbar(e, { variant: 'error' })
            enqueueSnackbar("Ошибка", { variant: 'error' })
        }
    }, [card.id_card, deleteCard, enqueueSnackbar, index, remove])

    return (
        <div>
            <Card>
                <CardHeader className="flex justify-between">
                    <span>{index + 1}</span>
                    <Button onClick={deleteHandler}>Удалить</Button>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-row justify-between">
                    <Textarea className="w-[45%]" label="Термин" {...register(`cards.${index}.termin`)} />
                    <Textarea className="w-[45%]" label="Определение" {...register(`cards.${index}.definition`)} defaultValue={card.termin_definition} />
                </CardBody>
            </Card>
        </div>
    );
};
