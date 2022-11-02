import * as React from "react";
import { useRouter } from "next/router";
import { CollecitonContext } from "../../contexts/CollectionContext";

const Collection = () => {
    const router = useRouter();
    const { collection, notFound, loading, getCollection } = React.useContext(CollecitonContext);
    const { collectionId } = router.query;
    const collection_id: string = collectionId as string;

    React.useEffect(() => {
        if (collection?.length === 0 && collection_id !== undefined) {
            if (getCollection) getCollection(collection_id);
        }
    }, [collection, getCollection, collection_id, notFound]);

    return (
        <>
            {/* TODO: Add meta head and interface for respone object */}
            {(() => {
                if (loading === true) {
                    return <span>Loading</span>;
                }
                if (notFound === true) {
                    return <span>404</span>;
                } else {
                    return <p>{collectionId}</p>;
                }
            })()}
        </>
    );
};

export default Collection;
