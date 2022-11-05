import * as React from "react";
import { collectionObject } from "../../@types/collection";
import { genetateProfileMedias } from "../../utils/modules";
import styles from "../../styles/collectionInfo.module.css";
import { Stats } from "../Stats";
import { MainTable } from "../MainTable";
import { holderStats } from "../../@types/holders";
import { Spin } from "antd";
const MainProfileLayout = ({ collectionData, collectionId, holdersData, getHolderById }: { collectionData: collectionObject; collectionId: string; holdersData: []; getHolderById: any }) => {
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        for (let i = 0; i < collectionData?.owner_ids.length; i++) {
            if (getHolderById) {
                if (i <= collectionData?.owner_ids.length) {
                    getHolderById(collectionData?.owner_ids[i], collectionId);
                }
            }
        }
    }, []);
    React.useEffect(() => {
        if (holdersData.length >= collectionData?.owner_ids.length) setLoading(false);
    }, [holdersData, collectionData?.owner_ids.length]);
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
        },
        {
            title: "Holding",
            dataIndex: "holding",
            width: "10%",
            sorter: (a: any, b: any) => {
                if (a.holding < b.holding) {
                    return -1;
                }
                if (a.holding > b.holding) {
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
                <p className={`${styles.display_description} ${styles.display_text}`}>{collectionData?.description}</p>
            </div>
            <Stats stats={collectionData} />
            {loading ? <Spin /> : <MainTable data={holdersData} columns={columns} />}
        </div>
    );
};

export default MainProfileLayout;
