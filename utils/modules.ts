import { collectionObject } from "../@types/collection";
import { parasCDN } from "../constants/baseUrls";

export const replaceIPFSToParasCDN = (url:string) => {
    if (url !== undefined) {
        const parasCDN = "https://paras-cdn.imgix.net/";
        const replaceUrl = url.replace("ipfs://", "");
        const concatUrl = parasCDN.concat(replaceUrl);
        return concatUrl;
    }
    return "";
};

export const concatMediaWithParasCDN = (url: string) => {
    if(url !== "") {
        const newUrl = parasCDN.concat(url)
        return newUrl
    } else {
        return
    }
}

export const genetateProfileMedias = ({cover, media}:{cover:string, media:string}) => {
    const profileMedias = {
        bgImg: {
            backgroundColor: cover ? "transparent" : "#e3e3e3",
            backgroundImage: cover ? `url(${concatMediaWithParasCDN(cover)})` : "",
        },
        pfp: {
            backgroundColor: media ? "transparent" : "#e3e3e3",
            backgroundImage: media ? `url(${concatMediaWithParasCDN(media)})` : "",
        },
    };
    return profileMedias
} 