import * as React from "react";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/CollectorSearchInput.module.css";
import { HoldersContext } from "../../contexts/HoldersContext";
import { holdersContextPartialProps } from "../../@types/holders";
const CollectorSearchInput = () => {
    const { holders, setSearchHolderResults } = React.useContext(HoldersContext) as holdersContextPartialProps;
    const searchUser = (value: string) => {
        const filtered = holders.filter((user) => JSON.stringify(user).toLowerCase().includes(value.toLowerCase()));
        if (value !== "") {
            if (filtered.length !== 0) {
                if (setSearchHolderResults) setSearchHolderResults(filtered, value);
            } else {
                if (setSearchHolderResults) setSearchHolderResults([], value);
            }
            if (setSearchHolderResults) setSearchHolderResults(filtered, value);
        } else {
            if (setSearchHolderResults) setSearchHolderResults([], value);
        }
    };
    return (
        <div className={styles.collector_search_input_wrapper}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            <Input placeholder="Find Me..." bordered={false} className={styles.searchInput} onChange={(e) => searchUser(e.target.value)} />
        </div>
    );
};

export default CollectorSearchInput;
