import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/SearchInput.module.css";
import { collectionContextPartialProps, search } from "../../@types/collection";
const SearchInput = ({ search, onSearch }: { search: search; onSearch: search | undefined }) => {
    const whileSearching = (input: string) => {
        if (onSearch) onSearch(input);
    };
    return (
        <div className={styles.search_wrapper}>
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
