import * as React from "react";
import { collectionObject, ContextProps } from "../@types/collection";
import { parasApi } from "../api";

const CollecitonContext = React.createContext<Partial<ContextProps>>({});
const CollecitonProvider = ({ children }: any) => {
    const [collection, setCollection] = React.useState<collectionObject>();
    const [notFound, setNotFound] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);

    const getCollection = async (collectionId: string) => {
        parasApi
            .get(`collections?collection_id=${collectionId}`)
            .then((res) => {
                if (res.data.data.results.length !== 0) {
                    setCollection({ ...res.data.data.results[0] });
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
    return <CollecitonContext.Provider value={{ collection, notFound, loading, getCollection }}>{children}</CollecitonContext.Provider>;
};
export { CollecitonContext, CollecitonProvider };
