import * as React from "react";
import { holdersContextPartialProps, holderStats } from "../@types/holders";
import { parasApi } from "../api";

const HoldersContext = React.createContext<Partial<holdersContextPartialProps>>({});
const HoldersProvider = ({ children }: any) => {
    const [holders, setHolder] = React.useState<any>([]);
    const setHolderStats = (holderObj: holderStats) => {
        setHolder((i: any) => [...i, holderObj]);
    };
    const getHolderById = async (holderId: string, collectionId: string) => {
        parasApi
            .get(`token?__limit=100&owner_id=${holderId}&collection_id=${collectionId}`)
            .then((res) => {
                const dataObj = {
                    wallet: holderId,
                    holding: res.data.data.results.length,
                };
                setHolderStats(dataObj);
            })
            .catch((err) => console.error(err));
    };

    return <HoldersContext.Provider value={{ holders, getHolderById }}>{children}</HoldersContext.Provider>;
};

export { HoldersContext, HoldersProvider };
