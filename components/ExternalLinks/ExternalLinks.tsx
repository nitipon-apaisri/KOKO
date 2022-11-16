import { Divider, Space } from "antd";
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight, faLink } from "@fortawesome/free-solid-svg-icons";
import { collectionContextPartialProps } from "../../@types/collection";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
import { generateCollectionHyperLink, generateExternalLink } from "../../utils/modules";
import styles from "../../styles/ExternalLinks.module.css";
import Link from "next/link";
import { discord, twitter } from "../../constants/baseUrls";

const ExternalLinks = () => {
    const { collection } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    return (
        <div className={styles.external_links_wrapper}>
            <Space size={16}>
                <Link href={generateCollectionHyperLink(collection?.collection_id)} className={styles.link}>
                    <FontAwesomeIcon icon={faSquareArrowUpRight} size="xl" className={`${styles.icon} ${styles.collection_link}`} />
                </Link>
                {collection?.socialMedia.twitter !== "" && (
                    <Link href={generateExternalLink(twitter, collection?.socialMedia.twitter)}>
                        <FontAwesomeIcon icon={faTwitter} size="xl" className={`${styles.icon}`} />
                    </Link>
                )}
                {collection?.socialMedia.discord !== "" && (
                    <Link href={generateExternalLink(discord, collection?.socialMedia.discord)}>
                        <FontAwesomeIcon icon={faDiscord} size="xl" className={`${styles.icon} ${styles.discord_icon}`} />
                    </Link>
                )}
                {collection?.socialMedia.website !== "" && (
                    <Link href={collection?.socialMedia.website}>
                        <FontAwesomeIcon icon={faLink} size="xl" className={styles.icon} />
                    </Link>
                )}
            </Space>
        </div>
    );
};

export default ExternalLinks;
