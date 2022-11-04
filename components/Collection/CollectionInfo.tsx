import { collectionObject } from "../../@types/collection";

const CollectionInfo = ({ collection }: { collection: collectionObject }) => {
    return (
        <>
            <span>{collection.collection}</span>
        </>
    );
};

export default CollectionInfo;
