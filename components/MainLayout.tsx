import React from "react";
import { Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import styles from "../styles/MainLayout.module.css";
const MainLayout = ({ children }: { children: any }) => {
    return (
        <>
            <Layout className={styles.layout}>
                <Header className={styles.header}>Header</Header>
                <Content className={styles.wrapper}>{children}</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};

export default MainLayout;
