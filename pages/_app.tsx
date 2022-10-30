import "antd/dist/antd.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainLayout from "../components/MainLayout";
import { CollecitonProvider } from "../contexts/CollectionContext";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <CollecitonProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </CollecitonProvider>
    );
}
