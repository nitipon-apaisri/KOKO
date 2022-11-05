export type holdersContextPartialProps = {
    holders: any
    getHolderById?: (holderId: string, collectionId: string) => void
}
export interface holderStats {
    wallet: string
    holding: number
}