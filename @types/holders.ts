export type holdersContextPartialProps = {
    holders: {}[]
    profiles: {}[]
    clearHolders?: () => void
    clearProfiles?: () => void
    getHolderById?: (holderId: string, collectionId: string) => void
}
export interface holderStats {
    wallet: string
    owned: number
}

export interface profile {
    _id: string
    accountId: string
    imgUrl:string
    
}