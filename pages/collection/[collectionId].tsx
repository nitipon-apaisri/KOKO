import * as React from "react";
import { useRouter } from "next/router";
import { CollecitonContext } from "../../contexts/CollectionContext";
import MetaHead from "../../components/MetaHead";
import { MainProfileLayout } from "../../components/MainProfile";
import { collectionObject } from "../../@types/collection";
import { HoldersContext } from "../../contexts/HoldersContext";
import { holderStats } from "../../@types/holders";

const Collection = () => {
    const router = useRouter();
    const { collection, notFound, loading, getCollection } = React.useContext(CollecitonContext);
    const { holders, getHolderById } = React.useContext(HoldersContext);
    const { collectionId } = router.query;
    const collection_id: string = collectionId as string;

    React.useEffect(() => {
        if (!collection && collection_id !== undefined) {
            if (getCollection) getCollection(collection_id);
        }
    }, [collection, getCollection, collection_id, notFound]);

    return (
        <>
            {/* TODO: Add meta head and interface for respone object */}
            <MetaHead title={collection ? `Lookup | ${collection?.collection}` : "Collection not found"} description={collection ? collection?.description : "Collection not found"} />
            {(() => {
                if (loading === true) {
                    return <span>Loading</span>;
                }
                if (notFound === true) {
                    return <span>404</span>;
                } else {
                    return <MainProfileLayout collectionData={collection as collectionObject} collectionId={collection_id} holdersData={holders} getHolderById={getHolderById} />;
                }
            })()}
        </>
    );
};

export default Collection;
