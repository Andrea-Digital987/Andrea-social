export type TSocialContext = {
    postsFetched ?: TData,
    setPostsFetched : Function
}

export type TPost = {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: TReaction
    views: number
    userId: number
  }

  export type TReaction =    {   
              likes: number
              dislikes: number
  }

  export type TData = {
    posts : TPost[]
    total: number
    skip: number
    limit: number 
  }
