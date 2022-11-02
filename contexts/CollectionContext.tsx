import * as React from "react";
import { ContextProps } from "../@types/collection";
import { parasApi } from "../api";

const CollecitonContext = React.createContext<Partial<ContextProps>>({});
const CollecitonProvider = ({ children }: any) => {
    const [collection, setCollection] = React.useState<[]>([]);
    const [notFound, setNotFound] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(true);
    const getCollection = async (collectionId: string) => {
        parasApi
            .get(`collections?collection_id=${collectionId}`)
            .then((res) => {
                if (res.data.data.results.length !== 0) {
                    setCollection(res.data.data.results);
                    setTimeout(() => {
                        setLoading(false);
                    }, 150);
                } else {
                    setNotFound(true);
                    setTimeout(() => {
                        setLoading(false);
                    }, 150);
                }
            })
            .catch((err) => console.error(err));
    };
    return <CollecitonContext.Provider value={{ collection, notFound, loading, getCollection }}>{children}</CollecitonContext.Provider>;
};
export { CollecitonContext, CollecitonProvider };
