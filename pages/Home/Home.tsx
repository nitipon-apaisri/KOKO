import * as React from "react";
import { Typography } from "antd";
import MetaHead from "../../components/MetaHead";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { SearchInput } from "../../components/SearchInput";
import { collectionContextPartialProps, onSearchCollectionsObject } from "../../@types/collection";
import { SearchSuggestions } from "../../components/SearchSuggestions";
const { Title } = Typography;

const Home = () => {
    const router = useRouter();
    const { collection, collectionsSearch, activeSuggestions, suggestionNotFound, onSearchACollection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const fetchCollection = (collectionId: string) => {
        setTimeout(() => {
            router.push(`collection/${collectionId}`);
        }, 200);
    };
    React.useEffect(() => {
        if (collection) window.location.reload();
    }, [collection]);
    return (
        <>
            <MetaHead />
            <div className={`${styles.container}`}>
                <Title>Explore a collection</Title>
                <SearchInput search={fetchCollection} onSearch={onSearchACollection} />
                {activeSuggestions && <SearchSuggestions collectionsSearch={collectionsSearch as onSearchCollectionsObject[]} suggestionNotFound={suggestionNotFound as boolean} />}
            </div>
        </>
    );
};

export default Home;
