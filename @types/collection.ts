export type collectionContextPartialProps = {
    collection: any
    notFound: boolean
    collectionGroupNotFound: boolean
    loading: boolean
    collectionGroupLoading: boolean
    activeSuggestions: boolean
    suggestionNotFound: boolean
    collections: {}[]
    collectionsSearch: {}[]
    clearCollection?: () => void 
    hideActiveSuggestions?: () => void
    getCollection?: (collectionId: string) => void
    onSearchACollection?: (input: string) => void
    searchCollections?: (key: string) => void
}
export interface collectionObject {
    _id: string;
    collection: string;
    collection_id: string;
    creator_id: string;
    description: string;
    cover:string
    is_creator: boolean;
    media: string;
    socialMedia: {};
    floor_price: string;
    has_floor_price: boolean;
    avg_price: string;
    owner_ids: [];
    total_cards: number;
    total_owners: number;
    volume: string;
}
export interface onSearchCollectionsObject {
    _id: string
    media: string
    cover: string
    collection: string
    creator_id: string
    is_creator: boolean
    collection_id: string
}

export type search = (input:string) => void