import { Card, CardFooter, Image, Button, Input, Textarea, Divider } from "@nextui-org/react";
import { CircularProgress, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { packApi } from "../model/packApi";

interface CreatePackModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

export const CreatePackModal = (props: CreatePackModalProps) => {

    const { isOpen, onOpen, onOpenChange } = props;

    const { register, control, handleSubmit, formState: { errors, isValid }, reset } = useForm();
    const [createPack, { isLoading, data, error }] = packApi.useCreatePackMutation();

    console.log(errors)
    console.log(isValid)

    const onSubmit = (data: any) => {
        console.log(data);
        createPack(data);
    }

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            // className="dark"
            backdrop="blur"
            classNames={{

            }}


        >
            <ModalContent

            >
                {(onClose) => (
                    <form onSubmit={handleSubmit((data: any) => { onSubmit(data), reset(), onClose() })} noValidate>
                        <ModalHeader className="flex flex-col gap-1"><h3 style={{ color: 'black' }}>Создать колоду</h3></ModalHeader>
                        <Divider />
                        <ModalBody className="mt-4">
                            <Input
                                {...register('title_pack', {
                                    required: true,
                                    minLength: 1,
                                })}
                                isInvalid={!!errors?.title_pack}
                                errorMessage={!!errors?.title_pack?.message || 'Название не может быть пустым'}
                                label={'Название'}
                            />
                            <Textarea
                                {...register('description')}
                                label={'Описание'}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={() => { onClose(), reset() }}>
                                Закрыть
                            </Button>
                            <Button type="submit" color="success" variant="ghost" disabled={!isValid}>
                                Создать
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};
