export type ContextProps = {
    collection: {
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
    };
    notFound: boolean;
    loading: boolean;
    getCollection?: (collectionId: string) => void;
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
