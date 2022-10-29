import { Typography, Input } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
const { Title } = Typography;
const { Search } = Input;
const Home = () => {
    return (
        <>
            <MetaHead />
            <div className={styles.container}>
                <Title>Hello World</Title>
                <Search enterButton />
            </div>
        </>
    );
};

export default Home;
