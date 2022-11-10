import * as React from "react";
import { collectionObject } from "../../@types/collection";
import { genetateProfileMedias, replaceIPFSToParasCDN } from "../../utils/modules";
import styles from "../../styles/collectionInfo.module.css";
import { Stats } from "../Stats";
import { MainTable } from "../MainTable";
import { profile } from "../../@types/holders";
import { Avatar, Space } from "antd";
import { Loading } from "../Loading";
const CollectionProfileLayout = ({
    collectionData,
    collectionId,
    holdersData,
    profiles,
    getHolderById,
}: {
    collectionData: collectionObject;
    collectionId: string;
    holdersData: [];
    profiles: profile[];
    getHolderById: any;
}) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        for (let i = 0; i < collectionData?.owner_ids.length; i++) {
            if (getHolderById) {
                if (i <= collectionData?.owner_ids.length) {
                    getHolderById(collectionData?.owner_ids[i], collectionId);
                }
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (holdersData.length >= collectionData?.owner_ids.length) setLoading(false);
    }, [holdersData, collectionData?.owner_ids.length, profiles]);
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
                <div style={genetateProfileMedias(collectionData).bgImg} className={styles.cover}>
                    <div style={genetateProfileMedias(collectionData).pfp} className={styles.pfp}></div>
                </div>
            </div>
            <div className={styles.profile_text_contents}>
                <h4 className={`${styles.display_title} ${styles.display_text}`}>{collectionData?.collection}</h4>
                <h5>Collection by {collectionData?.creator_id}</h5>
                {/* <p className={`${styles.display_description} ${styles.display_text}`}>{collectionData?.description}</p> */}
            </div>
            <Stats stats={collectionData} />
            <div className={styles.table_warpper}>{loading ? <Loading /> : <MainTable data={holdersData} columns={columns} />}</div>
        </div>
    );
};

export default CollectionProfileLayout;
