import * as React from "react";
import { Typography } from "antd";
import MetaHead from "../components/MetaHead";
import styles from "../styles/Home.module.css";
import { CollecitonsContext } from "../contexts/CollectionsContext";
import { SearchInput } from "../components/SearchInput";
import { collectionContextPartialProps } from "../@types/collection";
import { SearchSuggestions } from "../components/SearchSuggestions";
const { Title } = Typography;

const App = () => {
    const { collection, activeSuggestions } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    React.useEffect(() => {
        if (collection) window.location.reload();
    }, [collection]);
    return (
        <>
            <MetaHead />
            <div className={`${styles.container}`}>
                <Title>Explore a collection</Title>
                <SearchInput />
                {activeSuggestions && <SearchSuggestions />}
            </div>
        </>
    );
};

export default App;
