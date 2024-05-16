import { Button } from "@nextui-org/react";
import { NewCardForm } from "./NewCardForm";
import { useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { cardsApi } from "@/shared/api/cardsApi";
import { useEffect } from "react";

interface EditModeProps {
    id?: number;
    type: 'new' | 'edit';
}

export const EditMode = (props: EditModeProps) => {
    const {
        id,
        type,
    } = props;

    const { register, control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        defaultValues: {
            cards: []
        }
    });

    const { id_pack = 0 } = useParams();
    const { data: cards, isLoading, error } = cardsApi.useGetCardsByPackIdQuery(+id_pack);

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'cards'
    })

    useEffect(() => {
        if (cards) {
            reset({ cards });
        }
    }, [cards, reset]);

    const onSubmit = (data: any) => {
        console.log(data);
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                <Button type="submit">Submit</Button>
            </form>
            <Button type="button" onClick={() => append({})}>Add Card</Button>
        </>
    );
};
