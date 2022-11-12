import axios from "axios";

export const twitterApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_PROXY_SERVER}https://api.twitter.com/2/users/by/username/`,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
    },
});

export const parasApi = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_PROXY_SERVER}https://api-v2-mainnet.paras.id/`,
});
