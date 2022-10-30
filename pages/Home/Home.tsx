import * as React from "react";
import { Typography, Input } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
import { CollecitonContext } from "../../contexts/CollectionContext";
const { Title } = Typography;
const { Search } = Input;
const Home = () => {
    const collection = React.useContext(CollecitonContext);
    React.useEffect(() => {
        console.log(collection.str);
    });
    return (
        <>
            <MetaHead />
            <div className={styles.container}>
                <Title>Lookup A Collection</Title>
                <Search enterButton placeholder="E.g. 'what-the-by-kamwoonear'" />
            </div>
        </>
    );
};

export default Home;
