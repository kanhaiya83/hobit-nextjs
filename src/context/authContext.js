import React,{ useContext, useEffect, useState } from "react"
import { auth } from "../utils/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
const authContext=React.createContext({isAuthenticated:false})

export const useAuthContext = ()=>useContext(authContext);

export const AuthContextProvider = ({children})=>{

  const [hasEnrolled,setHasEnrolled] = useState(false);

    const [isAuthModalOpen,setIsAuthModalOpen] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    useEffect(()=>{
      if(user){
        setIsAuthModalOpen(false);
      }
    },[user])
    const value = {isAuthenticated:Boolean(user),loading, error,isAuthModalOpen,setIsAuthModalOpen,hasEnrolled,setHasEnrolled}

    return(
        <authContext.Provider value={value}>{children}</authContext.Provider>
    )
}