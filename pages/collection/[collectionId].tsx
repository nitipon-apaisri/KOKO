import * as React from "react";
import { useRouter } from "next/router";
import { CollecitonContext } from "../../contexts/CollectionContext";

const Collection = () => {
    const router = useRouter();
    const { collection } = React.useContext(CollecitonContext);
    const { collectionId } = router.query;
    const [notFound, setNotFound] = React.useState<Boolean>(false);
    React.useEffect(() => {
        if (collection?.length === 0) setNotFound(true);
        //TODO: Redirect to Home if collection id dosen't match to searched collection
    }, [collection]);
    return (
        <>
            <p>{collectionId}</p>
        </>
    );
};

export default Collection;
