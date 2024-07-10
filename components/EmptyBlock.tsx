import Lottie from "lottie-react";
import catAnimation from "../public/catAnimation.json";
import { Center, Text, useMantineTheme } from "@mantine/core";
interface EmptyBlockProps {
    title: string;
}

export const EmptyBlock: React.FC<EmptyBlockProps> = ({ title }) => {
    const theme = useMantineTheme();
    return (
        <Center
            style={{
                position: "relative",
                width: "100%",
                height: "calc(100vh - 82px)",
            }}
        >
            <Text
                style={{
                    position: "absolute",
                    top: "125px",
                    color: theme.colors.gray[6],
                    fontSize: "2.25rem",
                }}
            >
                {title}
            </Text>
            <Lottie
                animationData={catAnimation}
                loop={false}
                style={{
                    position: "absolute",
                    bottom: "0",
                    margin: "0 auto",
                    width: "550px",
                }}
            />
        </Center>
    );
};
