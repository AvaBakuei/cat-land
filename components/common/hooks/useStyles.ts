import { createUseStyles } from "react-jss";
import { MantineTheme } from "@mantine/core";

const useStyles = createUseStyles((theme: MantineTheme) => ({
    modal: {
        "& .mantine-Modal-body": {
            padding: "1rem",
        },
        "& .mantine-Modal-header": {
            minHeight: "auto !important",
            padding: "1rem 1rem 0 !important",
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
    modalTitle: {
        color: theme.colors.gray[7],
    },
    modalBody: {
        height: "350px !important",
    },
    modalImage: {
        position: "relative !important",
        objectFit: "cover",
        borderRadius: "0.5rem",
    },
    modalIcon: {
        color: theme.colors.orange[4],
    },
    modalText: {
        marginTop: "0.5rem",
        color: theme.colors.gray[6],
    },
    pinStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "1rem 0",
    },
    modalBtn: {
        backgroundColor: theme.colors.orange[4],

        "&:hover": {
            backgroundColor: theme.colors.orange[6],
        },
    },

    modalLink: {
        marginTop: "0.5rem",
    },
}));

export default useStyles;
