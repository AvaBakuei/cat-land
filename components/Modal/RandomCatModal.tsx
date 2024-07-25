import Image from "next/image";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Text, Button, PinInput, useMantineTheme } from "@mantine/core";
import { IconPaw } from "@tabler/icons-react";
import { useImperativeHandle, forwardRef, useState } from "react";
import { useImagePlaceholder } from "@/components/common/hooks/useImagePlaceholder";
import useStyles from "../common/hooks/useStyles";

interface RandomCatModalProps {
    title: string;
    codeLength: number;
    buttonTitle: string;
    isVerify: boolean;
    handleVerifyCode: (value: string) => void;
    catSrc: string;
}

export interface RandomCatModalRef {
    openModal: () => void;
}

export const RandomCatModal = forwardRef<
    RandomCatModalRef,
    RandomCatModalProps
>(
    (
        { title, codeLength, buttonTitle, isVerify, handleVerifyCode, catSrc },
        ref
    ) => {
        const classes = useStyles({ theme: useMantineTheme() });
        const [opened, { open, close }] = useDisclosure(false);
        const [value, setValue] = useState<string>("");
        const { base64 } = useImagePlaceholder();

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
                <Modal
                    opened={opened}
                    onClose={close}
                    title={<IconPaw stroke={2} className={classes.modalIcon} />}
                    className={classes.modal}
                >
                    {!isVerify ? (
                        <>
                            <Text size="xl" fw="500" className={classes.modalTitle}>
                                {title}
                            </Text>
                            <PinInput
                                className={classes.pinStyle}
                                length={codeLength}
                                onChange={onChange}
                            />
                            <Button onClick={handleModal} className={classes.modalBtn}>
                                {buttonTitle}
                            </Button>
                        </>
                    ) : (
                        <div className={classes.modalBody}>
                            <Image
                                className={classes.modalImage}
                                src={catSrc}
                                alt="Cat Image"
                                fill
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={base64}
                            />
                        </div>
                    )}
                </Modal>
            </>
        );
    }
);
