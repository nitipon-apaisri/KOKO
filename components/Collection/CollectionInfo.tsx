import { collectionObject } from "../../@types/collection";
import { concatMediaWithParasCDN } from "../../utils/modules";

const CollectionInfo = ({ collection }: { collection: collectionObject }) => {
    const bgImg = {
        bgImg: {
            backgroundColor: collection.cover ? "transparent" : "#e3e3e3",
            backgroundImage: collection.cover ? `url(${concatMediaWithParasCDN(collection?.cover)})` : "",
        },
    };
    return (
        <div className="container">
            <div style={bgImg.bgImg} className="cover"></div>
            <span>{collection.collection}</span>
        </div>
    );
};

export default CollectionInfo;
