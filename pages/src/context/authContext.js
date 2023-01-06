import React,{ useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebase";
const authContext=React.createContext({isAuthenticated:false})

export const useAuthContext = ()=>useContext(authContext);

export const AuthContextProvider = ({children})=>{
    const [isAuthenticated,setIsAuthenticated] = useState(false)
    const [isAuthModalOpen,setIsAuthModalOpen] = useState(false)
   useEffect(()=>{
   
        if (auth.currentUser) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);

        }
      
   },[auth.currentUser])
    const value = {isAuthenticated,setIsAuthenticated,isAuthModalOpen,setIsAuthModalOpen}
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}