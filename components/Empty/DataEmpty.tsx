import { Empty } from "antd";
import styles from "../../styles/Empty.module.css";
const DataEmpty = () => {
    return (
        <div className={styles.empty_wrapper}>
            <Empty />
        </div>
    );
};

export default DataEmpty;
