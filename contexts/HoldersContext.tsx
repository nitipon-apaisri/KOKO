import * as React from "react";
import { holdersContextPartialProps, holderStats, profile } from "../@types/holders";
import { parasApi } from "../api";

const HoldersContext = React.createContext<holdersContextPartialProps | null>(null);
const HoldersProvider = ({ children }: any) => {
    const [holders, setHolders] = React.useState<holderStats[]>([]);
    const [searchResults, setSearchResults] = React.useState<[]>([]);
    const [profiles, setProfiles] = React.useState<profile[]>([]);
    const [isSearch, setIsSearch] = React.useState<boolean>(false);
    const setHolderStats = (holderObj: holderStats) => {
        setHolders((i: any) => [...i, holderObj]);
    };
    const setProfile = (profileObj: profile) => {
        setProfiles((i: any) => [...i, profileObj]);
    };
    const getHolderById = async (holderId: string, collectionId: string) => {
        parasApi
            .get(`token?__limit=100&owner_id=${holderId}&collection_id=${collectionId}`)
            .then((res) => {
                const dataObj = {
                    wallet: holderId,
                    owned: res.data.data.results.length,
                };

                // getProfileById(holderId);
                setHolderStats(dataObj);
            })
            .catch((err) => console.error(err));
    };
    const getProfileById = async (accountId: string) => {
        parasApi
            .get(`profiles?accountId=${accountId}`)
            .then((res) => {
                const { _id, accountId, imgUrl } = res.data.data.results[0];
                const dataObj = {
                    _id: _id,
                    accountId: accountId,
                    imgUrl: imgUrl,
                };
                setProfile(dataObj);
            })
            .catch((err) => console.error(err));
    };
    const clearHolders = () => {
        setHolders([]);
    };
    const clearProfiles = () => {
        setProfiles([]);
    };
    const setSearchHolderResults = (arr: any, input: string) => {
        if (input.length !== 0 && arr.length !== 0) {
            setSearchResults(arr);
            setIsSearch(true);
        }
        if (input.length !== 0 && arr.length === 0) {
            setSearchResults([]);
        }
        if (input.length === 0 && arr.length === 0) {
            setSearchResults([]);
            setIsSearch(false);
        }
    };
    return <HoldersContext.Provider value={{ holders, profiles, searchResults, isSearch, setSearchHolderResults, clearHolders, clearProfiles, getHolderById }}>{children}</HoldersContext.Provider>;
};

export { HoldersContext, HoldersProvider };
