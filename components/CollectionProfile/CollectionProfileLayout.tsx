import * as React from "react";
import { collectionContextPartialProps, collectionObject } from "../../@types/collection";
import { genetateProfileMedias, replaceIPFSToParasCDN } from "../../utils/modules";
import styles from "../../styles/collectionInfo.module.css";
import { Stats } from "../Stats";
import { MainTable } from "../MainTable";
import { holdersContextPartialProps, profile } from "../../@types/holders";
import { Avatar, Space } from "antd";
import { Loading } from "../Loading";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { useRouter } from "next/router";
import { HoldersContext } from "../../contexts/HoldersContext";
const CollectionProfileLayout = () => {
    const route = useRouter();
    const { collectionId } = route.query;
    const collection_id: string = collectionId as string;
    const [loading, setLoading] = React.useState(true);
    const { collection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const { holders, profiles, getHolderById } = React.useContext(HoldersContext) as holdersContextPartialProps;
    React.useEffect(() => {
        for (let i = 0; i < collection?.owner_ids.length; i++) {
            if (getHolderById) {
                if (i <= collection?.owner_ids.length) {
                    getHolderById(collection?.owner_ids[i], collection_id);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (holders.length >= collection?.owner_ids.length) setLoading(false);
    }, [holders, collection?.owner_ids.length, profiles]);
    React.useEffect(() => {
        if (collection_id !== collection?.collection_id) {
            window.location.reload();
        }
    }, [collection_id, collection]);
    const columns = [
        {
            title: "Wallet",
            dataIndex: "wallet",
            sorter: (a: any, b: any) => {
                if (a.wallet < b.wallet) {
                    return -1;
                }
                if (a.wallet > b.wallet) {
                    return 1;
                }
                return 0;
            },
            render: (v: string) => {
                const index = profiles?.findIndex((i: profile) => i.accountId === v);
                return (
                    <>
                        {index !== -1 && (
                            <Space>
                                <Avatar src={`${replaceIPFSToParasCDN(profiles[index].imgUrl)}`} />
                                <span>{v}</span>
                            </Space>
                        )}
                    </>
                );
            },
        },
        {
            title: "Owned",
            dataIndex: "owned",
            width: "10%",
            align: "right",
            sorter: (a: any, b: any) => {
                if (a.owned < b.owned) {
                    return -1;
                }
                if (a.owned > b.owned) {
                    return 1;
                }
                return 0;
            },
        },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.profile_medias_contents}>
                <div style={genetateProfileMedias(collection).bgImg} className={styles.cover}>
                    <div style={genetateProfileMedias(collection).pfp} className={styles.pfp}></div>
                </div>
            </div>
            <div className={styles.profile_text_contents}>
                <h4 className={`${styles.display_title} ${styles.display_text}`}>{collection?.collection}</h4>
                <h5>Collection by {collection?.creator_id}</h5>
                {/* <p className={`${styles.display_description} ${styles.display_text}`}>{collection?.description}</p> */}
            </div>
            <Stats stats={collection} />
            <div className={styles.table_warpper}>{loading ? <Loading /> : <MainTable data={holders} columns={columns} />}</div>
        </div>
    );
};

export default CollectionProfileLayout;
