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
        "& .mantine-Accordion-control": {
            padding: "0",
            fontSize: "14px",
            color: theme.colors.orange[5],
        },
        "& .mantine-Accordion-item": {
            paddingBottom: "0.5rem",
            backgroundColor: "transparent",
        },
        "& .mantine-Accordion-content": {
            display: "flex",
            alignItems: "center",
            padding: "5px 16px",
            fontSize: "14px",
            color: theme.colors.gray[6],
        },
        "& .mantine-Accordion-chevron": {
            display: "none",
        },
        "& .mantine-Accordion-label": {
            padding: "0",
        },
        "& .mantine-Anchor-root": {
            fontSize: "14px",
            color: theme.colors.blue[4],
        },
        "& .mantine-Accordion-icon": {
            marginRight: "2px",
        },
    },
    modalTitle: {
        display: "flex",
        alignItems: "center",
        color: theme.colors.gray[7],
    },
    modalTitleIcon: {
        width: "18px",
        height: "18px",
        marginLeft: "2px",
        color: theme.colors.orange[3],
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
        fontSize: "15px",
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
    accordianIcon: {
        width: "20px",
        height: "20px",
        color: theme.colors.yellow[3],
    }
}));

export default useStyles;
