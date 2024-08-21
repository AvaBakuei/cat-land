import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";
import styles from "../styles/Home.module.css";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme}>
      <div className={styles.app}>
        <Header />
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}
