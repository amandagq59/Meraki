
import { createContext, useState } from "react";


export const MerakiContext = createContext()

export const ContextMeraki = ({children}) => {

  const [user, setUser] = useState([])
  

  return (
    <MerakiContext.Provider
      value={{
        user, 
        setUser
      }}
    >
      {children}
    </MerakiContext.Provider>

  )
}