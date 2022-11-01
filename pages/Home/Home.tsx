import * as React from "react";
import { Typography, Input } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
import { CollecitonContext } from "../../contexts/CollectionContext";

const { Title } = Typography;
const { Search } = Input;
const Home = () => {
    const { getCollection } = React.useContext(CollecitonContext);
    const fetchCollection = (value: string) => {
        if (getCollection) {
            getCollection(value);
        }
    };
    return (
        <>
            <MetaHead />
            <div className={styles.container}>
                <Title>Lookup A Collection</Title>
                <Search enterButton placeholder="E.g. 'what-the-by-kamwoonear'" onSearch={(value: string) => fetchCollection(value)} />
            </div>
        </>
    );
};

export default Home;
