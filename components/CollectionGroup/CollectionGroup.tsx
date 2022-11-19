import { Divider, Typography } from "antd";
import * as React from "react";
import styles from "../../styles/CollectionGroup.module.css";
import { CollectionGroupContents } from "../CollectionGroupContents";
const { Title } = Typography;
const CollectionGroup = () => {
    return (
        <div className={styles.container}>
            <Title>Collections</Title>
            <Divider />
            <CollectionGroupContents />
        </div>
    );
};

export default CollectionGroup;
