import * as React from "react";
import { useRouter } from "next/router";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import MetaHead from "../../components/MetaHead";
import { CollectionProfileLayout } from "../../components/CollectionProfile";
import { collectionContextPartialProps } from "../../@types/collection";
import { Loading } from "../../components/Loading";
import { NotFound } from "../../components/NotFound";

const Collection = () => {
    const router = useRouter();
    const { collection, notFound, loading, getCollection, onSearchACollection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const { collectionId } = router.query;
    const collection_id: string = collectionId as string;

    React.useEffect(() => {
        if (collection?.collection_id !== collectionId) {
            if (getCollection) getCollection(collection_id);
        }
    }, [collection, getCollection, collection_id, collectionId]);
    React.useEffect(() => {
        if (onSearchACollection) onSearchACollection("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            {/* TODO: Add meta head and interface for respone object */}
            <MetaHead title={collection ? `Lookup | ${collection?.collection}` : "Collection not found"} description={collection ? collection?.description : "Collection not found"} />
            {(() => {
                if (loading === true) {
                    return <Loading />;
                }
                if (notFound === true) {
                    return <NotFound />;
                }
                if (collection) {
                    return <CollectionProfileLayout />;
                }
            })()}
        </>
    );
};

export default Collection;
