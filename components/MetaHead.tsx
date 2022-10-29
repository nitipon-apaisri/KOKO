import React from "react";
import Head from "next/head";

const MetaHead = ({ title, keywords, description }: { title: string; keywords: string; description: string }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    );
};

MetaHead.defaultProps = {
    title: "Sato - Collections Lookup",
    keywords: "web nft marketplace",
    description: "Sato is an application to lookup nft collections from Paras Marketplace",
};

export default MetaHead;
