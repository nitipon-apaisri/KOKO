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