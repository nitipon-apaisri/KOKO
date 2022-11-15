import * as React from "react";
import { collectionContextPartialProps, collectionObject } from "../../@types/collection";
import { genetateProfileMedias, generateCollectionHyperLink, generateProfileHyperLink, replaceIPFSToParasCDN } from "../../utils/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/collectionInfo.module.css";
import { Stats } from "../Stats";
import { MainTable } from "../MainTable";
import { holdersContextPartialProps, profile } from "../../@types/holders";
import { Avatar, Divider, Empty, Input, Space, Tooltip } from "antd";
import { Loading } from "../Loading";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { useRouter } from "next/router";
import { HoldersContext } from "../../contexts/HoldersContext";
import Link from "next/link";
import { CollectorSearchInput } from "../CollectorSearchInput";
import { ExternalLinks } from "../ExternalLinks";
const CollectionProfileLayout = () => {
    const route = useRouter();
    const { collectionId } = route.query;
    const collection_id: string = collectionId as string;
    const [loading, setLoading] = React.useState(true);
    const [width, setWidth] = React.useState(0);
    const { collection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const { holders, profiles, isSearch, searchResults, getHolderById, getProfileById } = React.useContext(HoldersContext) as holdersContextPartialProps;
    const fetchProfile = React.useCallback(
        (id: string) => {
            if (getProfileById) getProfileById(id);
        },
        [getProfileById]
    );
    const fetchHolder = React.useCallback(
        (id: string) => {
            if (getHolderById) getHolderById(id, collection_id);
        },
        [getHolderById, collection_id]
    );
    React.useEffect(() => {
        for (let i = 0; i < collection?.owner_ids.length; i++) {
            setTimeout(() => {
                fetchHolder(collection?.owner_ids[i]);
                fetchProfile(collection?.owner_ids[i]);
            }, 1000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    React.useEffect(() => {
        if (collection?.owner_ids.length > 10) {
            if (holders.length >= 10) setLoading(false);
        }
        if (collection?.owner_ids.length <= 10) {
            if (holders.length === collection?.owner_ids.length) setLoading(false);
        }
    }, [holders, collection]);
    React.useEffect(() => {
        window.addEventListener("resize", updateWindowSize);
    }, []);
    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };
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
            ellipsis: {
                showTitle: false,
            },
            width: "80%",
            render: (v: string) => {
                const index = profiles?.findIndex((i: profile) => i.accountId === v);
                return (
                    <>
                        <Space>
                            {index !== -1 ? <Avatar src={`${replaceIPFSToParasCDN(profiles[index].imgUrl)}`} /> : <Avatar icon={<FontAwesomeIcon icon={faUser} />} />}
                            <span>{v}</span>
                        </Space>
                    </>
                );
            },
        },
        {
            title: "Owned",
            dataIndex: "owned",
            align: "right",
            width: width <= 960 ? "20%" : "10%",
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
                <Space direction="vertical" size={2}>
                    <Space size={3}>
                        <Link href={generateCollectionHyperLink(collection?.collection_id)}>
                            <h4 className={`${styles.display_title} ${styles.display_text}`}>{collection?.collection}</h4>
                        </Link>
                    </Space>
                    <Space size={3}>
                        <h5>Collection by</h5>
                        <Link href={generateProfileHyperLink(collection?.creator_id)}>
                            <h5 className={styles.display_text_highlight}>{collection?.creator_id}</h5>
                        </Link>

                        {collection?.is_creator && (
                            <Tooltip title="Creator verified">
                                <FontAwesomeIcon icon={faCircleCheck} color="Dodgerblue" />
                            </Tooltip>
                        )}
                    </Space>
                    <ExternalLinks />
                </Space>
                {/* <p className={`${styles.display_description} ${styles.display_text}`}>{collection?.description}</p> */}
            </div>
            <Stats stats={collection} />
            {holders.length !== 0 && (
                <>
                    <Divider style={{ margin: "16px 0" }} />
                    <div className={styles.table_header}>
                        <h1>Collectors</h1>
                        <CollectorSearchInput />
                    </div>
                    <Divider style={{ margin: "16px 0" }} />
                </>
            )}
            {isSearch && searchResults.length === 0 ? (
                <>
                    <Empty />
                </>
            ) : (
                <div className={styles.table_warpper}>{loading ? <Loading /> : <MainTable data={isSearch ? searchResults : holders} columns={columns} />}</div>
            )}
        </div>
    );
};

export default CollectionProfileLayout;
