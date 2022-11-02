export type ContextProps = {
    collection:[]
    notFound: boolean
    loading: boolean
    getCollection?: (collectionId: string) => void
}
    