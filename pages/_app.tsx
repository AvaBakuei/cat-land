import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import { createTheme, MantineProvider } from "@mantine/core";
import { Header } from "@/components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  const theme = createTheme({});
  return (
    <MantineProvider theme={theme}>
      <div style={{ padding: "2rem 6rem" }}>
        <Header />
        <Component {...pageProps} />
      </div>
    </MantineProvider>
  );
}
