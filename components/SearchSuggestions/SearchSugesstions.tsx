import * as React from "react";
import { onSearchCollectionsObject } from "../../@types/collection";
import { Loading } from "../Loading";
import styles from "../../styles/SearchSuggestions.module.css";
import { Avatar, Space } from "antd";
import { concatMediaWithParasCDN } from "../../utils/modules";
const SearchSuggestions = ({ collectionsSearch }: { collectionsSearch: onSearchCollectionsObject[] }) => {
    return (
        <div className={styles.suggestions_wrapper}>
            {collectionsSearch.length === 0 ? (
                <Loading />
            ) : (
                collectionsSearch
                    .sort((a, b) => (a.collection < b.collection ? -1 : 1))
                    .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
                    .map((r, i) => (
                        <div key={r._id} className={`${styles.suggestion_item} ${styles.item_bt_border}`}>
                            <Space>
                                <Avatar src={`${concatMediaWithParasCDN(r.media.toString())}`} style={{ border: "1px solid #dfdfdf" }} />
                                <h5>
                                    {r.collection} by {r.creator_id}
                                </h5>
                            </Space>
                        </div>
                    ))
            )}
        </div>
    );
};

export default SearchSuggestions;
