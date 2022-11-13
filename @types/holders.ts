export type holdersContextPartialProps = {
    holders: holderStats[]
    searchResults: []
    profiles: profile[]
    isSearch: boolean
    clearHolders?: () => void
    clearProfiles?: () => void
    setSearchHolderResults?: (arr: any, input: string) => void
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