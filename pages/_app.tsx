import "antd/dist/antd.css";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import { CollecitonProvider } from "../contexts/CollectionsContext";
import { HoldersProvider } from "../contexts/HoldersContext";
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CollecitonProvider>
            <HoldersProvider>
                <MainLayout>
                    <Component {...pageProps} />
                </MainLayout>
            </HoldersProvider>
        </CollecitonProvider>
    );
}
