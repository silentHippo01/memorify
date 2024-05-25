import { packApi } from "@/features/Packs/model/packApi";
import { useDebounce } from "@/shared/utils/useDebounce";
import { Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IPackFormProps {
    disabled: boolean;
    pack: any;
}

export const PackForm = (props: IPackFormProps) => {

    const { disabled } = props;

    const { id_pack = 0 } = useParams();
    const { data: pack, isLoading: isLoadingPack, error: errorPack } = packApi.useGetPackByIdQuery(+id_pack);
    const [updatePack] = packApi.useUpdatePackMutation();

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>(
        {
            defaultValues: {
                title_pack: pack?.title_pack,
                description: pack?.description,
            }
        }
    );

    const savePackData = async (updatedData: any) => {
        console.log({ id_pack: pack?.id_pack, ...updatedData })
        // console.log('id', card.id_card);
        try {
            await updatePack({ id_pack: pack?.id_pack, ...updatedData }).unwrap();
            enqueueSnackbar('Колода обновлена', { variant: 'success' });
        } catch (e) {
            enqueueSnackbar('Ошибка при обновлении колоды', { variant: 'error' });
        }
    };

    const debouncedSaveCard = useDebounce(savePackData, 250);

    const handleFieldChange = async (event: any) => {
        const { name, value } = event.target;
        debouncedSaveCard({ [name]: value });
    };

    // if (isLoadingPack) {
    //     return (
    //         <div>Loading...</div>
    //     )
    // }

    // useEffect(() => {
    //     if (pack) {
    //         reset({
    //             title_pack: pack?.title_pack,
    //             description: pack?.description,
    //         });
    //     }
    // }, [pack, reset]);

    const onSubmit = (data: any) => {
        console.log(data);
    }

    console.log(pack)

    if (!pack) {
        return <div>Loading...</div>
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4 mb-4">
            <Card>
                <CardBody className="flex flex-col gap-2">
                    <Input
                        {...register('title_pack')}
                        label={'Название'}
                        defaultValue={pack?.title_pack}
                        onChange={handleFieldChange}
                    // disabled={disabled}
                    />
                    <Textarea
                        {...register('description')}
                        label={'Описание'}
                        defaultValue={pack?.description}
                        onChange={handleFieldChange}
                    // disabled={disabled}
                    />
                    <button type="submit">dfdf</button>
                </CardBody>
            </Card>
        </form>
    );
};
