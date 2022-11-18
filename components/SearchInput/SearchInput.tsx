import * as React from "react";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/SearchInput.module.css";
import { collectionContextPartialProps, search } from "../../@types/collection";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { useRouter } from "next/router";
const SearchInput = ({ pathName }: { pathName: string }) => {
    const router = useRouter();
    const { onSearchACollection, clearCollection, hideActiveSuggestions } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const [timer, setTimer] = React.useState<any>(null);
    const fetchCollection = (key: string) => {
        if (hideActiveSuggestions) hideActiveSuggestions();
        if (clearCollection) clearCollection();
        setTimeout(() => {
            router.push(pathName !== "/" ? `${key}` : `search/${key}`);
        }, 200);
    };
    const searchCollection = (input: string, type: string) => {
        if (input.length === 0) {
            if (hideActiveSuggestions) hideActiveSuggestions();
        }
        clearTimeout(timer);
        const newTimer = setTimeout(
            () => {
                if (onSearchACollection) onSearchACollection(input);
            },
            type === "click" ? 250 : 500
        );
        setTimer(newTimer);
    };
    const whileSearching = (input: string) => {
        searchCollection(input, "typing");
    };
    const clickSearch = (input: string) => {
        searchCollection(input, "click");
    };
    return (
        <div className={pathName !== "/" ? styles.search_wrapper_secondary : styles.search_wrapper_primary}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.searchIcon} />
            <Input
                placeholder="Find Me..."
                bordered={false}
                className={styles.searchInput}
                onPressEnter={(v: any) => fetchCollection(v.target.value)}
                onChange={(v) => {
                    whileSearching(v.target.value);
                }}
                onClick={(v: any) => clickSearch(v.target.value)}
            />
        </div>
    );
};

export default SearchInput;
