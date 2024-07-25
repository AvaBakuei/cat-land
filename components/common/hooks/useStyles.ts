import { createUseStyles } from "react-jss";
import { MantineTheme } from "@mantine/core";

const useStyles = createUseStyles((theme: MantineTheme) => ({
    modal: {
        padding: "1rem",
        "& .mantine-Modal-header": {
            backgroundColor: "transparent",
        },
        "& .mantine-Modal-close": {
            borderRadius: "50%",
            backgroundColor: theme.colors.red[0],
            color: theme.colors.red[6],
            "&:focus": {
                outline: "0",
            },
        },
    },
    modalIcon: {
        color: theme.colors.orange[4],
    },
    modalTitle: {
        margin: "1rem 0",
        color: theme.colors.gray[7],
    },
    pinStyle: {
        margin: "2rem 0",
    },
    modalBtn: {
        backgroundColor: theme.colors.cyan[5],

        "&:hover": {
            backgroundColor: theme.colors.cyan[7],
        },

    },
    modalBody: {
        width: "100%",
        height: "227px",
    },
    modalImage: {
        objectFit: "cover",
    },
}));

export default useStyles;
