import React, { ReactNode,createContext, useState } from 'react'
import ReactDOM from "react-dom/client";
import { TSocialContext } from '../Utils/commonTypes';
import { TData } from '../Utils/commonTypes'

export const SocialContext = createContext<TSocialContext|null>(null)


function SocialContextProvider({children}: {children:ReactNode}) {
    
    const [postsFetched , setPostsFetched] = useState<TData>({
      posts:[],
      limit:0,
      skip:0,
      total:0
  })
    
    return (
    <SocialContext.Provider value={{postsFetched ,setPostsFetched}}>
      {children}
    </SocialContext.Provider>
  )
}

export default SocialContextProvider

