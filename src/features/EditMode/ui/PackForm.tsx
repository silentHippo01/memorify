import { packApi } from "@/features/Packs/model/packApi";
import { Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

interface IPackFormProps {
    disabled: boolean;
    pack: any;
}

export const PackForm = (props: IPackFormProps) => {

    const { disabled, pack } = props;

    const { id_pack = 0 } = useParams();
    // const { data: pack, isLoading: isLoadingPack, error: errorPack } = packApi.useGetPackByIdQuery(+id_pack);

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>(
        {
            defaultValues: {
                title_pack: pack?.title_pack,
                description: pack?.description,
            }
        }
    );

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

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4 mb-4">
            <Card>
                <CardBody className="flex flex-col gap-2">
                    <Input
                        {...register('title_pack')}
                        label={'Название'}
                    // disabled={disabled}
                    />
                    <Textarea
                        {...register('description')}
                        label={'Описание'}
                    // disabled={disabled}
                    />
                    <button type="submit">dfdf</button>
                </CardBody>
            </Card>
        </form>
    );
};
