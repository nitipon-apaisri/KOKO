export type collectionContextPartialProps = {
    collection: any;
    notFound: boolean;
    loading: boolean;
    activeSuggestions: boolean
    suggestionNotFound: boolean
    collections: {}[]
    collectionsSearch: {}[]
    getCollection?: (collectionId: string) => void;
    onSearchACollection?: (input: string) => void
}
export interface collectionObject {
    _id: string;
    collection: string;
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
    collection: string
    creator_id: string
    is_creator: boolean
    collection_id: string
}

export type search = (input:string) => void