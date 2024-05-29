import React, { createContext , useState} from 'react'
import { TInsertContext } from '../Utils/commonTypes'

export const InsertWindowContext = createContext<TInsertContext|null>(null)

export function InsertWindowContextProvider({children}:{children:React.ReactNode} ) {
    const [opened , setOpened] = useState<boolean>(false);
  return (
    <InsertWindowContext.Provider value={{opened , setOpened}}>
        {children}
    </InsertWindowContext.Provider>
  )
}
