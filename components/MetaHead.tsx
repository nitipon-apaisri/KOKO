import React from "react";
import Head from "next/head";

const MetaHead = ({ title, description }: { title: string; keywords: string; description: string }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="web nft marketplace" />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

MetaHead.defaultProps = {
    title: "BJÖRN - The Collections Explorer",
    keywords: "web nft marketplace",
    description: "BJÖRN is a web application for lookup nft collections from Paras Marketplace",
};

export default MetaHead;
