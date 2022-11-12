import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import styles from "../styles/MainLayout.module.css";
import { Navbar } from "./Navbar";
const MainLayout = ({ children }: { children: any }) => {
    return (
        <>
            <Layout className={styles.layout}>
                <Header className={styles.header}>
                    <Navbar />
                </Header>
                <Content className={styles.wrapper}>{children}</Content>
                <Footer className={styles.footer}>
                    <h3>
                        © 2022 - Developed by
                        <a href="https://twitter.com/nitipon_apaisri" target="_blank" rel="noopener noreferrer">
                            👨‍💻
                        </a>
                    </h3>
                </Footer>
            </Layout>
        </>
    );
};

export default MainLayout;
