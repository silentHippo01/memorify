import { Button, Card, CardBody, Input, Textarea } from "@nextui-org/react";
import { NewCardForm } from "./NewCardForm";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { cardsApi } from "@/shared/api/cardsApi";
import { useEffect, useState } from "react";
import { packApi } from "@/features/Packs/model/packApi";
import { PackForm } from "./PackForm";

interface EditModeProps {
    id?: number;
    type: 'new' | 'edit';
}

export const EditMode = (props: EditModeProps) => {
    const {
        id,
        type,
    } = props;

    const [isDisabled, setDisabled] = useState(true);

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            cards: []
        }
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'cards'
    })

    const { id_pack = 0 } = useParams();
    const { data: cards, isLoading, error } = cardsApi.useGetCardsByPackIdQuery(+id_pack);
    console.log(id_pack, 'id_pack')


    useEffect(() => {
        if (cards) {
            reset({ cards });
        }
    }, [cards, reset]);

    const onSubmit = (data: any) => {
        console.log(data);
    }

    console.log(isDisabled)
    return (
        <>
            <h1 className="text-2xl font-semibold leading-tight mb-4 mt-3">Редактирование</h1>


            <div className="flex gap-1 justify-end ">
                <Button className="" color="success" variant="bordered" type="button" onClick={() => append({})}>Добавить</Button>
                <Button
                    variant="bordered"
                    // color="warning"
                    onClick={() => setDisabled(!isDisabled)}
                    className=""
                >
                    {
                        isDisabled ? ' Редактировать' : 'Сохранить'
                    }
                </Button>
                <Button type="submit">Отправить</Button>
            </div>

            <PackForm
                disabled={isDisabled}
            />

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-4 flex flex-col gap-4">

                {
                    fields.map((item, index) => (
                        <NewCardForm
                            card={item}
                            key={item.id}
                            register={register}
                            remove={remove}
                            index={index}

                        // onRemove={() => remove(index)}
                        />
                    ))
                }

            </form>

        </>
    );
};
