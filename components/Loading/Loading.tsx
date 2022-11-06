import { Spin } from "antd";
import styles from "../../styles/Loading.module.css";
const Loading = () => {
    return (
        <div className={styles.wrapper}>
            <Spin />
        </div>
    );
};

export default Loading;
