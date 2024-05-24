import { packApi } from "@/features/Packs/model/packApi";
import { Button, CircularProgress, Divider, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react";

interface DeletePackModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;

    id_pack: number;
    title_pack: string;
}

export const DeletePackModal = (props: DeletePackModalProps) => {

    const { isOpen, onOpen, onOpenChange, id_pack, title_pack } = props;
    const [deletePack] = packApi.useDeletePackMutation();
    console.log(+id_pack, 'id_pack')

    const deleteHandler = () => {
        deletePack(id_pack);
        console.log('deletePack', id_pack)
    }

    return (
        <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            className="dark"
            backdrop="blur"
            classNames={{

            }}


        >
            <ModalContent

            >
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1"><h3 style={{ color: 'white' }}>Удалить колоду {title_pack}?</h3></ModalHeader>
                        <Divider />
                        <ModalBody className="mt-4">

                            <p style={{ color: 'white' }}>Вы действительно хотите удалить эту колоду?</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Отмена
                            </Button>
                            <Button type="submit" color="success" variant="ghost" onClick={deleteHandler}>
                                Удалить
                            </Button>
                        </ModalFooter>
                    </>


                )}
            </ModalContent>
        </Modal>
    );
};
