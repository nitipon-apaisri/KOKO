import * as React from "react";
import { collectionObject, collectionContextPartialProps, onSearchCollectionsObject } from "../@types/collection";
import { parasApi } from "../api";
import { generateCollectionObject } from "../utils/modules";

const CollecitonsContext = React.createContext<collectionContextPartialProps | null>(null);
const CollecitonProvider = ({ children }: any) => {
    const [collection, setCollection] = React.useState<collectionObject>();
    const [collections, setCollections] = React.useState<collectionObject[]>([]);
    const [collectionsSearch, setCollectionSearch] = React.useState<collectionObject[]>([]);
    const [notFound, setNotFound] = React.useState<boolean>(false);
    const [collectionGroupNotFound, setCollectionGroupNotFound] = React.useState<boolean>(true);
    const [loading, setLoading] = React.useState<boolean>(true);
    const [collectionGroupLoading, setCollectionGroupLoading] = React.useState<boolean>(true);
    const [activeSuggestions, setActiveSuggestions] = React.useState<boolean>(false);
    const [suggestionNotFound, setSuggestionNotFound] = React.useState<boolean>(false);
    const setOnSearchCollection = (data: onSearchCollectionsObject) => {
        setCollectionSearch((i: any) => [...i, data]);
    };
    const setOnSearchCollectionsEnchance = (data: onSearchCollectionsObject) => {
        setCollections((i: any) => [...i, data]);
    };
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
        if (input.length >= 3) {
            setActiveSuggestions(true);
            setCollectionSearch([]);
            setSuggestionNotFound(false);
            parasApi
                .get(`collections?__limit=5&collection_search=${input}`)
                .then((res) => {
                    if (res.data.data.results.length === 0) {
                        setSuggestionNotFound(true);
                    } else {
                        setSuggestionNotFound(false);
                        res.data.data.results.forEach((i: any) => {
                            setOnSearchCollection(generateCollectionObject(i));
                            setTimeout(() => {
                                setCollectionGroupLoading(false);
                            }, 50);
                        });
                    }
                })
                .catch((err) => console.error(err));
        }
        if (input.length === 0) {
            setActiveSuggestions(false);
            setCollectionSearch([]);
            setSuggestionNotFound(false);
        }
    };
    const searchCollections = async (key: string) => {
        setCollections([]);
        setCollectionGroupLoading(true);
        setCollectionGroupNotFound(false);
        await parasApi
            .get(`collections?__limit=8&collection_search=${key}`)
            .then((res) => {
                if (res.data.data.results.length > 0) {
                    setCollectionGroupNotFound(false);
                    res.data.data.results.forEach((i: any) => {
                        setOnSearchCollectionsEnchance(generateCollectionObject(i));
                    });
                    setTimeout(() => {
                        setCollectionGroupLoading(false);
                    }, 50);
                }
                if (res.data.data.results.length === 0) {
                    setTimeout(() => {
                        setCollectionGroupLoading(false);
                    }, 50);
                }
            })
            .catch((err) => console.error(err));
    };
    const clearCollection = () => {
        setCollection(undefined);
    };
    const hideActiveSuggestions = () => {
        setActiveSuggestions(false);
    };
    return (
        <CollecitonsContext.Provider
            value={{
                collection,
                collections,
                collectionsSearch,
                notFound,
                collectionGroupNotFound,
                loading,
                collectionGroupLoading,
                activeSuggestions,
                suggestionNotFound,
                hideActiveSuggestions,
                clearCollection,
                getCollection,
                onSearchACollection,
                searchCollections,
            }}
        >
            {children}
        </CollecitonsContext.Provider>
    );
};
export { CollecitonsContext, CollecitonProvider };
