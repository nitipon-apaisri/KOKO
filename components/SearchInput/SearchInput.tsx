import * as React from "react";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/SearchInput.module.css";
import { search } from "../../@types/collection";
const SearchInput = ({ search, onSearch, pathName }: { search: search; onSearch: search | undefined; pathName: string }) => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [timer, setTimer] = React.useState<any>(null);
    const whileSearching = (input: string) => {
        if (input.length === 0) {
            if (onSearch) onSearch(input);
        }
        setSearchValue(input);
        clearTimeout(timer);
        const newTimer = setTimeout(() => {
            if (onSearch) onSearch(input);
        }, 500);
        setTimer(newTimer);
    };
    return (
        <div className={pathName !== "/" ? styles.search_wrapper_secondary : styles.search_wrapper_primary}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            <Input
                placeholder="E.g. 'what-the-by-kamwoonear'"
                bordered={false}
                className={styles.searchInput}
                onPressEnter={(v: any) => search(v.target.value)}
                onChange={(v) => {
                    whileSearching(v.target.value);
                }}
            />
        </div>
    );
};

export default SearchInput;
