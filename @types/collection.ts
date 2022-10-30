export interface InitialCollections {}

export type CollectionContextType = {
    collecitons:[]
    getCollections: (collection: InitialCollections) => void
}
    