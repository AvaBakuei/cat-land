import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, PinInput } from "@mantine/core";
import { IconCat } from "@tabler/icons-react";
import { useImperativeHandle, forwardRef, useState } from "react";

interface RandomCatModalProps {
    title: string;
    codeLength: number;
    buttonTitle: string;
    isVerify: boolean;
    handleVerifyCode: (value: string) => void;
}

export interface RandomCatModalRef {
    openModal: () => void;
}

export const RandomCatModal = forwardRef<
    RandomCatModalRef,
    RandomCatModalProps
>(({ title, codeLength, buttonTitle, isVerify, handleVerifyCode }, ref) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<string>("");

    useImperativeHandle(ref, () => ({
        openModal: open,
    }));
    const onChange = (e: string) => {
        setValue(e);
    };

    const handleModal = () => {
        handleVerifyCode(value);
    };

    return (
        <>
            <Modal opened={opened} onClose={close} title={<IconCat stroke={2} />}>
                {!isVerify ? (
                    <>
                        <div>{title}</div>
                        <PinInput length={codeLength} onChange={onChange} />
                        <Button onClick={handleModal}>{buttonTitle}</Button>
                    </>
                ) : (
                    <div>Show a random cat picture</div>
                )}
            </Modal>
        </>
    );
});
