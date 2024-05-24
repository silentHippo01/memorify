import { cardsApi } from "@/shared/api/cardsApi";
import { useDebounce } from "@/shared/utils/useDebounce";
import { Button, Card, CardBody, CardHeader, Divider, Input, Textarea } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

interface NewCardFormProps {
    index: number;
    remove: any;
    card: any;
}

export const NewCardForm = (props: NewCardFormProps) => {

    const {
        index,
        remove,
        card,
    } = props;

    const [deleteCard, { isLoading, data, error }] = cardsApi.useDeleteCardMutation();
    const [updateCard, { isLoading: updateLoading, data: updateData, error: updateError }] = cardsApi.useUpdateCardMutation();

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            termin: card.termin,
            termin_definition: card.termin_definition
        }
    });

    const onSubmit = (data: any) => {
        console.log(data);
    }

    const saveCardData = async (updatedData: any) => {
        console.log({ id_card: card.id_card, ...updatedData })
        console.log('id', card.id_card);
        try {
            await updateCard({ id_card: card.id_card, ...updatedData }).unwrap();
            enqueueSnackbar('Карточка обновлена', { variant: 'success' });
        } catch (e) {
            enqueueSnackbar('Ошибка при обновлении карточки', { variant: 'error' });
        }
    };

    const debouncedSaveCard = useDebounce(saveCardData, 1000);

    const handleFieldChange = async (event: any) => {
        const { name, value } = event.target;
        debouncedSaveCard({ [name]: value });
    };

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
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Card>
                <CardHeader className="flex justify-between">
                    <span># {index + 1}</span>
                    <Button onClick={deleteHandler} variant="ghost" color="danger">Удалить</Button>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-row justify-between">
                    <Textarea className="w-[49%]" label="Термин" {...register(`termin`)} onChange={handleFieldChange} />
                    <Textarea className="w-[49%]" label="Определение" {...register(`termin_definition`)} onChange={handleFieldChange} />
                </CardBody>
            </Card>
        </form>
    );
};
