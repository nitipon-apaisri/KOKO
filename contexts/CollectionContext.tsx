import * as React from "react";
import { ContextProps } from "../@types/collection";
import { parasApi } from "../api";

const CollecitonContext = React.createContext<Partial<ContextProps>>({});
const CollecitonProvider = ({ children }: any) => {
    const [collections, setCollections] = React.useState<[]>([]);
    const getCollection = async (collectionId: string) => {
        parasApi
            .get(`collections?collection_id=${collectionId}`)
            .then((res) => {
                console.log(res.data.data.results[0]);
                // setCollections(res.data.data.result)
            })
            .catch((err) => console.error(err));
    };
    return <CollecitonContext.Provider value={{ collections, getCollection }}>{children}</CollecitonContext.Provider>;
};
export { CollecitonContext, CollecitonProvider };
