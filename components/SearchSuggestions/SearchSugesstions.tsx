import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { onSearchCollectionsObject } from "../../@types/collection";
import { Loading } from "../Loading";
import styles from "../../styles/SearchSuggestions.module.css";
import { Avatar, Space, Tooltip } from "antd";
import { concatMediaWithParasCDN } from "../../utils/modules";
import Link from "next/link";
import { DataEmpty } from "../Empty";
import { useRouter } from "next/router";
const SearchSuggestions = ({ collectionsSearch, suggestionNotFound }: { collectionsSearch: onSearchCollectionsObject[]; suggestionNotFound: boolean }) => {
    const route = useRouter();
    const pathName = route.pathname;
    return (
        <div className={styles.suggestions_wrapper}>
            {(() => {
                if (collectionsSearch.length === 0 && !suggestionNotFound) return <Loading />;
                if (suggestionNotFound) return <DataEmpty />;
                if (collectionsSearch.length > 0)
                    return collectionsSearch
                        .sort((a, b) => (a.is_creator < b.is_creator ? -1 : 1))
                        .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
                        .map((r, i) => (
                            <Link href={pathName !== "/" ? `${r.collection_id}` : `collection/${r.collection_id}`} key={r._id}>
                                <div className={`${styles.suggestion_item} ${styles.item_bt_border}`}>
                                    <Space>
                                        <Avatar src={`${concatMediaWithParasCDN(r.media.toString())}`} style={{ border: "1px solid #dfdfdf" }} />
                                        <h4>{r.collection}</h4>
                                        {r.is_creator && (
                                            <Tooltip title="Creator verified">
                                                <FontAwesomeIcon icon={faCircleCheck} color="Dodgerblue" />
                                            </Tooltip>
                                        )}
                                    </Space>
                                </div>
                            </Link>
                        ));
            })()}
        </div>
    );
};

export default SearchSuggestions;
