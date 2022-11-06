import * as React from "react";
import { collectionObject, collectionContextPartialProps } from "../@types/collection";
import { parasApi } from "../api";

const CollecitonsContext = React.createContext<collectionContextPartialProps | null>(null);
const CollecitonProvider = ({ children }: any) => {
    const [collection, setCollection] = React.useState<collectionObject>();
    const [collections, setCollections] = React.useState<[]>([]);
    const [collectionsSearch, setCollectionSearch] = React.useState<[]>([]);
    const [notFound, setNotFound] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);

    const getCollection = async (collectionId: string) => {
        parasApi
            .get(`collections?collection_id=${collectionId}`)
            .then((res) => {
                if (res.data.data.results.length !== 0) {
                    setCollection(res.data.data.results[0]);
                    setTimeout(() => {
                        setLoading(false);
                    }, 50);
                } else {
                    setNotFound(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 50);
                }
            })
            .catch((err) => console.error(err));
    };
    const onSearchACollection = (input: string) => {
        console.log(input);
    };
    return <CollecitonsContext.Provider value={{ collection, collections, collectionsSearch, notFound, loading, getCollection, onSearchACollection }}>{children}</CollecitonsContext.Provider>;
};
export { CollecitonsContext, CollecitonProvider };
