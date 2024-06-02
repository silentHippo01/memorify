import { cardsApi } from "@/shared/api/cardsApi";
import { useDebounce } from "@/shared/utils/useDebounce";
import { Button, Card, CardBody, CardHeader, Divider, Input, Textarea, Image } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface NewCardFormProps {
    index: number;
    // remove: any;
    card: any;
    item: any;
}

export const NewCardForm = (props: NewCardFormProps) => {

    const {
        index,
        // remove,
        card,
        item,
    } = props;

    const [selectedFile, setSelectedFile] = useState(null);

    const [deleteCard, { isLoading, data, error }] = cardsApi.useDeleteCardMutation();
    const [updateCard, { isLoading: updateLoading, data: updateData, error: updateError }] = cardsApi.useUpdateCardMutation();

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            termin: card.termin,
            termin_definition: card.termin_definition
        }
    });

    // useEffect(() => {
    //     reset({
    //         termin: card.termin,
    //         termin_definition: card.termin_definition
    //     })
    // }, [card])

    // console.log('item', item)
    // console.log('card', card)


    const saveCardData = async (updatedData: any) => {
        console.log({ id_card: card.id_card, ...updatedData })
        console.log('id', card.id_card);
        try {
            await updateCard({ id_card: card.id_card, ...updatedData }).unwrap();
            // enqueueSnackbar('Карточка обновлена', { variant: 'success' });
        } catch (e) {
            enqueueSnackbar('Ошибка при обновлении карточки', { variant: 'error' });
        }
    };

    const debouncedSaveCard = useDebounce(saveCardData, 250);

    const handleFieldChange = async (event: any) => {
        const { name, value } = event.target;
        debouncedSaveCard({ [name]: value });
    };

    const deleteHandler = useCallback(async () => {
        try {
            const res: any = await deleteCard(card.id_card).unwrap();
            // remove(index)
            // enqueueSnackbar('Карточка удалена', { variant: 'success' })
        } catch (e: any) {
            // enqueueSnackbar(e, { variant: 'error' })
            enqueueSnackbar("Ошибка", { variant: 'error' })
        }
    }, [card.id_card, deleteCard, enqueueSnackbar, index])

    console.log(`card from props ${card.id_card}`, card)


    const onSubmit = (data: any) => {
        console.log(data);
    }

    const inputRef = useRef<HTMLInputElement>(null);


    const handleFileChange = (event: any) => {
        // const file = event.target.files[0];
        // console.log(file);
    }

    const openImageSelector = (event: any) => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    }

    const handleUploadImage = (event: any) => {
        const formData = new FormData();
        // formData.append('file', selectedFile);

        //делаем запрос на сервер

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Card>
                <CardHeader className="flex justify-between">
                    <span># {index + 1}</span>
                    {/* <span>id_card {card.id_card}</span> */}
                    <Button onClick={deleteHandler} variant="ghost" color="danger">Удалить</Button>
                </CardHeader>
                <Divider />
                <CardBody className="flex flex-row justify-between gap-4">
                    <Textarea className="w-[49%] " label="Термин" onChange={handleFieldChange} name="termin" defaultValue={card.termin} />
                    <Textarea className="w-[49%]" label="Определение" onChange={handleFieldChange} name="termin_definition" defaultValue={card.termin_definition} />

                    <div className="hover:cursor-pointer hover:opacity-70" onClick={openImageSelector}>
                        <input type="file" className="hidden" ref={inputRef} onChange={handleFileChange} />
                        {/* <Button variant="ghost" color="warning">Добавить картинку</Button> */}
                        {card?.avatar_card && <Image
                            className="object-cover w-full"
                            width={300}
                            height={300}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            // src={avatar_card}
                            src={card?.avatar_card}
                        // width={400}
                        />}
                    </div>
                </CardBody>
            </Card>
        </form>
    );
};
