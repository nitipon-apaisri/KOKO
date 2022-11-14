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
                        <b>Total Owners</b>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{stats?.total_cards}</h2>
                        <b>Total Cards</b>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{prettyBalance(stats?.floor_price, 24, 4)} Ⓝ</h2>
                        <b>Floor Price</b>
                    </Space>
                </Col>
                <Col>
                    <Space direction="vertical" align="center" size={2}>
                        <h2>{prettyBalance(stats?.volume, 24, 4)} Ⓝ</h2>
                        <b>Volume</b>
                    </Space>
                </Col>
            </Row>
        </div>
    );
};

export default Stats;
