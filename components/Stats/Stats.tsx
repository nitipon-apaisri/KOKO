import { Col, Row, Space } from "antd";
import { collectionObject } from "../../@types/collection";
import { prettyBalance } from "../../utils/converts";
import styles from "../../styles/Stats.module.css";

const Stats = ({ stats }: { stats: collectionObject }) => {
    return (
        <div className={styles.wrapper}>
            <Row justify="space-around">
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{stats?.total_owners}</h2>
                        <p>Total Owners</p>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{stats?.total_cards}</h2>
                        <p>Total Cards</p>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{prettyBalance(stats?.floor_price, 24, 4)} Ⓝ</h2>
                        <p>Floor Price</p>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{prettyBalance(stats?.volume, 24, 4)} Ⓝ</h2>
                        <p>Volume</p>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Stats;
