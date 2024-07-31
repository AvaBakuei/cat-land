import Image from "next/image";
import Link from "next/link";
import {
  Modal,
  Text,
  Button,
  PinInput,
  useMantineTheme,
  Center,
  Title,
  Accordion,
  Anchor,
} from "@mantine/core";
import { IconBulb, IconPawFilled } from "@tabler/icons-react";
import { useState } from "react";
import { useImagePlaceholder } from "@/components/common/hooks/useImagePlaceholder";
import useStyles from "../common/hooks/useStyles";
import { CardInterface } from "../common/types/card.types";

interface RandomCatModalProps {
  catInfo: CardInterface | undefined;
  isVerify: boolean;
  handleVerifyCode: (value: string) => void;
  opened: boolean;
  onClose: () => void;
  pinError: boolean;
}

export const RandomCatModal: React.FC<RandomCatModalProps> = ({
  catInfo,
  isVerify,
  handleVerifyCode,
  opened,
  onClose,
  pinError,
}) => {
  const classes = useStyles({ theme: useMantineTheme() });
  const [value, setValue] = useState<string>("");
  const { base64 } = useImagePlaceholder();

  const catBreedStr = catInfo?.name.split(" ").join("");

  const onChange = (e: string) => {
    setValue(e);
  };

  const handleModal = () => {
    handleVerifyCode(value);
  };

  return (
    <>
      {catInfo && (
        <Modal
          size="lg"
          opened={opened}
          onClose={onClose}
          title={
            <Text ta="center" size="lg" fw="500" className={classes.modalTitle}>
              Guess the Cat Breed
              <IconPawFilled className={classes.modalTitleIcon} />
            </Text>
          }
          className={classes.modal}
        >
          <Center className={classes.modalBody}>
            <Image
              className={classes.modalImage}
              src={catInfo?.imageUrl ?? base64}
              alt="Cat Image"
              fill
              loading="lazy"
              placeholder="blur"
              blurDataURL={base64}
            />
          </Center>
          {!isVerify ? (
            <>
              <Text ta="center" size="md" className={classes.modalText}>
                Welcome to our daily cat challenge! 🐱
                <br />
                Can you guess the breed of this adorable cat?
                <br />
                Enter your guess in the field below and see if you’re right!
              </Text>
              <PinInput
                className={classes.pinStyle}
                length={catBreedStr?.length}
                onChange={onChange}
                placeholder=""
                size="xs"
                error={pinError}
              />
              <Accordion variant="filled">
                <Accordion.Item key={catInfo.name} value={catInfo.name}>
                  <Accordion.Control
                    icon={
                      <IconBulb stroke={2} className={classes.accordianIcon} />
                    }
                  >
                    Need a hint?
                    <Anchor href="#" ml="4px">
                      Click here.
                    </Anchor>
                  </Accordion.Control>
                  <Accordion.Panel>
                    This breed originates from
                    <Title order={6} ml="4px">
                      {catInfo.origin}.
                    </Title>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>

              <Center>
                <Button onClick={handleModal} className={classes.modalBtn}>
                  Verify Code
                </Button>
              </Center>
            </>
          ) : (
            <>
              <Text ta="center" size="md" className={classes.modalText}>
                🎉 Congratulations! 🎉
                <br />
                You guessed it right! This cat is indeed a{" "}
                <Title order={6}>{catInfo.name}</Title>
                Click below to learn more about this breed.
              </Text>
              <Center>
                <Link
                  href={`/catProfile/${catInfo.id}`}
                  className={classes.modalLink}
                >
                  <Button onClick={handleModal} className={classes.modalBtn}>
                    Go to Cat Details
                  </Button>
                </Link>
              </Center>
            </>
          )}
        </Modal>
      )}
    </>
  );
};
