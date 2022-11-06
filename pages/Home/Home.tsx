import * as React from "react";
import { Typography, Input } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { CollecitonContext } from "../../contexts/CollectionContext";
const { Title } = Typography;
const { Search } = Input;

const Home = () => {
    const router = useRouter();
    const { collection } = React.useContext(CollecitonContext);
    const fetchCollection = (collectionId: string) => {
        setTimeout(() => {
            router.push(`collection/${collectionId}`);
        }, 200);
    };
    React.useEffect(() => {
        if (collection) window.location.reload();
    }, [collection]);
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
