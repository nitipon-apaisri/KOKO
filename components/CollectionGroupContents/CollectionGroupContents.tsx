import * as React from "react";
import { collectionContextPartialProps, collectionObject, onSearchCollectionsObject } from "../../@types/collection";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { Loading } from "../Loading";
import { NotFound } from "../NotFound";
import styles from "../../styles/CollectionGroupContents.module.css";
import { Col, Row } from "antd";
import { generateAvatar } from "../../utils/modules";
import Link from "next/link";

const CollectionGroupContents = () => {
    const { collections, collectionGroupLoading, collectionGroupNotFound } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const reload = () => {
        setTimeout(() => {
            window.location.reload();
        }, 150);
    };
    return (
        <div className={styles.contents} style={collectionGroupLoading ? { marginTop: 40 } : {}}>
            {(() => {
                if (collectionGroupLoading) return <Loading />;
                if (collectionGroupNotFound) return <NotFound />;
                if (collections.length !== 0)
                    return (
                        <Row gutter={[24, 24]}>
                            {collections.map((i: any) => (
                                <Col span={6} key={i._id}>
                                    <Link href={`../collection/${i.collection_id}`} onClick={() => reload()}>
                                        <div className={styles.card}>
                                            <div className={styles.pfp_cover}>
                                                <div style={generateAvatar(i.media).pfp} className={styles.pfp}></div>
                                            </div>
                                            <div className={styles.collection_name}>
                                                <h5 style={{ marginBottom: 0 }}>{i.collection}</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    );
            })()}
        </div>
    );
};

export default CollectionGroupContents;
