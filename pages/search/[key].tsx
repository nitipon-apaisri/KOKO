import * as React from "react";
import { useRouter } from "next/router";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { collectionContextPartialProps } from "../../@types/collection";

const SearchSuggestionsPage = () => {
    const { searchCollections } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const router = useRouter();
    const { key } = router.query;

    React.useEffect(() => {
        if (searchCollections) searchCollections(key as string);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
    return <span>{key}</span>;
};

export default SearchSuggestionsPage;
