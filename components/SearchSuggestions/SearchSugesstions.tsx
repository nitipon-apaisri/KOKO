import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { collectionContextPartialProps, onSearchCollectionsObject } from "../../@types/collection";
import { Loading } from "../Loading";
import styles from "../../styles/SearchSuggestions.module.css";
import { Avatar, Space, Tooltip } from "antd";
import { concatMediaWithParasCDN } from "../../utils/modules";
import Link from "next/link";
import { DataEmpty } from "../Empty";
import { useRouter } from "next/router";
import { CollecitonsContext } from "../../contexts/CollectionsContext";
const SearchSuggestions = () => {
    const { collectionsSearch, suggestionNotFound, activeSuggestions, hideActiveSuggestions } = React.useContext(CollecitonsContext) as collectionContextPartialProps;
    const route = useRouter();
    const pathName = route.pathname;
    const generateRoute = (collectionId: string) => {
        if (pathName === "/") return `collection/${collectionId}`;
        if (pathName !== "/" && pathName.includes("search") === false) return `${collectionId}`;
        if (pathName.includes("search") === true) return `../collection/${collectionId}`;
    };
    const reload = () => {
        if (hideActiveSuggestions) hideActiveSuggestions();
        setTimeout(() => {
            window.location.reload();
        }, 150);
    };
    window.addEventListener("click", ({ target }: MouseEvent): void => {
        if (!document.getElementById("suggestion_item")?.contains(target as Node)) {
            if (hideActiveSuggestions) hideActiveSuggestions();
        }
    });
    return (
        <div className={styles.suggestions_wrapper}>
            {(() => {
                if (collectionsSearch.length === 0 && !suggestionNotFound) return <Loading />;
                if (suggestionNotFound) return <DataEmpty />;
                if (activeSuggestions)
                    return collectionsSearch
                        ?.sort((a: any, b: any) => (a.is_creator < b.is_creator ? -1 : 1))
                        .filter((v: any, i: any, a: any) => a.findIndex((v2: any) => v2._id === v._id) === i)
                        .map((r: any, i) => (
                            <Link href={`${generateRoute(r.collection_id as string)}`} key={r._id} onClick={() => reload()}>
                                <div className={`${styles.suggestion_item} ${styles.item_bt_border}`} id="suggestion_item">
                                    <Space>
                                        <Avatar src={`${concatMediaWithParasCDN(r.media)}`} style={{ border: "1px solid #dfdfdf" }} />
                                        <h4>{r.collection}</h4>
                                        {r.is_creator && (
                                            <Tooltip title="Creator verified">
                                                <FontAwesomeIcon icon={faCircleCheck} color="Dodgerblue" />
                                            </Tooltip>
                                        )}
                                    </Space>
                                </div>
                            </Link>
                        ));
            })()}
        </div>
    );
};

export default SearchSuggestions;
