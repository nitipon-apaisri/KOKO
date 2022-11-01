import { useRouter } from "next/router";
import * as React from "react";
import { ContextProps } from "../@types/collection";
import { parasApi } from "../api";

const CollecitonContext = React.createContext<Partial<ContextProps>>({});
const CollecitonProvider = ({ children }: any) => {
    const router = useRouter();
    const [collection, setCollection] = React.useState<[]>([]);
    const getCollection = async (collectionId: string) => {
        parasApi
            .get(`collections?collection_id=${collectionId}`)
            .then((res) => {
                if (res.data.data.results !== 0) {
                    setCollection(res.data.data.results);
                    setTimeout(() => {
                        router.push(`collection/${collectionId}`);
                    }, 100);
                }
            })
            .catch((err) => console.error(err));
    };
    return <CollecitonContext.Provider value={{ collection, getCollection }}>{children}</CollecitonContext.Provider>;
};
export { CollecitonContext, CollecitonProvider };
