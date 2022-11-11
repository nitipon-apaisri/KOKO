import * as React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Navbar.module.css";
import { SearchInput } from "../SearchInput";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { collectionContextPartialProps, onSearchCollectionsObject } from "../../@types/collection";
import { SearchSuggestions } from "../SearchSuggestions";
import { Space } from "antd";
import Link from "next/link";
const Navbar = () => {
    const router = useRouter();
    const pathName = router.pathname;
    const { collectionsSearch, activeSuggestions, suggestionNotFound, onSearchACollection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const fetchCollection = (collectionId: string) => {
        setTimeout(() => {
            router.push(`collection/${collectionId}`);
        }, 200);
    };
    return (
        <nav className={pathName === "/" ? `${styles.menu} ${styles.menu_home}` : styles.menu}>
            <Link href={`/`}>
                <div className={styles.logo}></div>
            </Link>

            <div className={styles.search_input}>
                {pathName !== "/" && (
                    <>
                        <SearchInput search={fetchCollection} onSearch={onSearchACollection} pathName={pathName} />
                        {activeSuggestions && pathName !== "/" && (
                            <SearchSuggestions collectionsSearch={collectionsSearch as onSearchCollectionsObject[]} suggestionNotFound={suggestionNotFound as boolean} />
                        )}
                    </>
                )}
            </div>
            {/* <ul className={styles.menu_list}>
                <li className={styles.menu_item}>Collection</li>
                <li className={styles.menu_item}>Creator</li>
            </ul> */}
        </nav>
    );
};

export default Navbar;
