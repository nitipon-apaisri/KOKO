import { Divider, Typography } from "antd";
import * as React from "react";
import styles from "../../styles/CollectionGroup.module.css";
const { Title } = Typography;
const CollectionGroup = () => {
    return (
        <div className={styles.container}>
            <Title>Collection</Title>
            <Divider />
        </div>
    );
};

export default CollectionGroup;
