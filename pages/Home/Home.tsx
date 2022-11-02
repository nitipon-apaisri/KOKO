import * as React from "react";
import { Typography, Input } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
import { CollecitonContext } from "../../contexts/CollectionContext";
import { useRouter } from "next/router";

const { Title } = Typography;
const { Search } = Input;
const Home = () => {
    const { getCollection } = React.useContext(CollecitonContext);
    const router = useRouter();
    const fetchCollection = (collectionId: string) => {
        setTimeout(() => {
            router.push(`collection/${collectionId}`);
        }, 200);
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
