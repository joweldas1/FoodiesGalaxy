import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()





    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (name,imgUrl) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name, 
            photoURL:imgUrl
          })
    }

    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password   )
    }

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider )
    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
        
    }

    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth,data=>{
            console.log(data);
            setUser(data)
            setLoading(false)
        })
         return ()=>{unsubscribe()}
    },[])



const data =  { createUser , updateUser , login , googleLogin , logOut ,user,setUser, loading,setLoading } 
return (
        <authContext.Provider value={data}>
        {children}
        </authContext.Provider>
    );
};

export default AuthProvider;