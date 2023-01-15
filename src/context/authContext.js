import React,{ useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebase";
const authContext=React.createContext({isAuthenticated:false})

export const useAuthContext = ()=>useContext(authContext);

export const AuthContextProvider = ({children})=>{
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [isAuthModalOpen,setIsAuthModalOpen] = useState(false)
  const [hasEnrolled,setHasEnrolled] = useState(false)
  useEffect(()=>{
   auth.onAuthStateChanged((user)=>{
    console.log("Auth state changed",user);
    if (user) {
      setIsAuthenticated(true);
      setIsAuthModalOpen(false)

    } else {
      setIsAuthenticated(false);

    }
   })
       
      
   },[])
    const value = {isAuthenticated,setIsAuthenticated,isAuthModalOpen,setIsAuthModalOpen,hasEnrolled,setHasEnrolled}
    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}