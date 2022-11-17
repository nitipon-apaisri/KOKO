import * as React from "react";
import { useRouter } from "next/router";

const SearchSuggestionsPage = () => {
    const router = useRouter();
    const { key } = router.query;
    return <span>{key}</span>;
};

export default SearchSuggestionsPage;
