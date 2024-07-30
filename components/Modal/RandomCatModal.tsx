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
    opened: boolean;
    onClose: () => void;
}

export const RandomCatModal: React.FC<RandomCatModalProps> = ({
    title,
    codeLength,
    buttonTitle,
    isVerify,
    handleVerifyCode,
    catSrc,
    opened,
    onClose,
}) => {
    const classes = useStyles({ theme: useMantineTheme() });
    const [value, setValue] = useState<string>("");
    const { base64 } = useImagePlaceholder();

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
                onClose={onClose}
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
};
